'use server'
import { urlFor } from "@/sanity/lib/image";
import stripe from "@/lib/stripe";
import { CartItem } from "@/store/carte.store";
import Stripe from "stripe";


export interface Metadata {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  userId: string;
}


export interface GroupedCartItems {
  product: CartItem["product"];
  variant: CartItem['variant']
  quantity: number;
}


export async function createCheckoutSession(
  items: GroupedCartItems[],
  metadata: Metadata
) {
  try {

    // Validate if any grouped items don't have a price
    const itemsWithoutPrice = items.filter((item) => {
      const price = parseFloat(
        (item.variant.price ?? "0")
          .replace(",", ".")
          .replace(/[^\d.]/g, "")
      );

      return !price || Number.isNaN(price);
    });

    if (itemsWithoutPrice.length > 0) {
      throw new Error("Some items do not have a valid price");
    }


    // Retrieve existing customer or create a new one
    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });


    const customerId = customers.data.length > 0 ? customers.data[0].id : "";

    const sessionPayload: Stripe.Checkout.SessionCreateParams = {

      mode: "payment",
      payment_method_types: ["card"],
      invoice_creation: {
        enabled: true,
      },
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'FR', 'BG', 'DE', 'IT', 'ES', 'AE']
      },
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },

      custom_text: {
        shipping_address: {
          message: "Veuillez fournir votre adresse de livraison",
        },
        submit: {
          message: "En finalisant votre achat, vous acceptez nos Conditions d'utilisation",
        },
      },

      success_url: `${process.env.NEXT_PUBLIC_APP_URL || `https://${process.env.VERCEL_URL}`
        }/orders/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || `https://${process.env.VERCEL_URL}`
        }`,

      line_items: items.map((item) => {
        const price = parseFloat(
          (item.variant.price ?? "0")
            .replace(",", ".")
            .replace(/[^\d.]/g, "")
        );

        return {
          price_data: {
            currency: "eur",
            unit_amount: Math.round(price * 100),

            product_data: {
              name: item.product.name || "Unnamed Product",

              description: [
                item.product.description,
                item.variant.flavor
                  ? `Saveur: ${item.variant.flavor}`
                  : null,
                item.variant.taille
                  ? `Taille: ${item.variant.taille}`
                  : null,
              ]
                .filter(Boolean)
                .join(" • "),

              metadata: {
                productId: item.product._id,
                variantKey: item.variant._key,
                flavor: item.variant.flavor ?? "",
                taille: item.variant.taille ?? "",
              },

              images:
                item.product.images?.length
                  ? [urlFor(item.product.images[0]).url()]
                  : [],
            },
          },

          quantity: item.quantity,
        };
      }),

      metadata: {
        orderNumber: metadata.orderNumber,
        customerName: metadata.customerName,
        customerEmail: metadata.customerEmail,
        userId: metadata.userId,
        cart: JSON.stringify(
          items.map((item) => ({
            productId: item.product._id,
            variantKey: item.variant._key,
            flavor: item.variant.flavor,
            taille: item.variant.taille,
            quantity: item.quantity,
            price: item.variant.price,
          }))
        ),
      },
    }

    // Conditionally add customer or customer_email
    if (customerId) {
      sessionPayload.customer = customerId;
    } else {
      sessionPayload.customer_email = metadata.customerEmail;
    }

    const session = await stripe.checkout.sessions.create(sessionPayload);

    return session.url;



  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
}