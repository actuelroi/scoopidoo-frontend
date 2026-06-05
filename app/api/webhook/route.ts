

import stripe from "@/lib/stripe";
import { backendClient } from "@/sanity/lib/backendClient";

import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";



type CheckoutMetadata = {
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    userId: string;
    cart: string;
};

export async function POST(req: NextRequest) {
    const body = await req.text();
    const headersList = await headers();
    const sig = headersList.get("stripe-signature")


    if (!sig) {
        return NextResponse.json(
            {
                error: "No signature",
            },
            { status: 400 }
        );
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
        console.log("Stripe webhook secret is not set");
        return NextResponse.json(
            {
                error: "Stripe webhook secret is not set",
            },
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (error) {
        console.error("Webhook signature verification failed:", error);
        return NextResponse.json(
            {
                error: `Webhook Error: ${error}`,
            },
            { status: 400 }
        );
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;
        const invoice = session.invoice
            ? await stripe.invoices.retrieve(session.invoice as string)
            : null;


        try {
            await createOrderInSanity(session, invoice);
            // const order = await createOrderInSanity(session, invoice);;
            // console.log("Order created in Sanity:", order);
        } catch (error) {
            console.error("Error creating order in sanity:", error);
            return NextResponse.json(
                {
                    error: `Error creating order: ${error}`,
                },
                { status: 400 }
            );
        }
    }
    return NextResponse.json({ received: true });
}


async function createOrderInSanity(
    session: Stripe.Checkout.Session,
    invoice: Stripe.Invoice | null
) {
    // console.log("createOrderInSanity", invoice);

    const {
        id,
        amount_total,
        currency,
        metadata,
        payment_intent,
        // customer,
        total_details,
    } = session;

    const {
        orderNumber,
        customerName,
        customerEmail,
        userId,
        cart,
    } = session.metadata as CheckoutMetadata;

    const shipping = session.customer_details?.address;

     await stripe.checkout.sessions.listLineItems(
        id,
        { expand: ["data.price.product"] }
    );

    // Creating sanity product reference
    const cartItems = JSON.parse(cart || "[]");

    const sanityProducts = cartItems.map(
        (item: {
            productId: string;
            variantKey: string;
            flavor?: string;
            taille?: string;
            price?: string;
            quantity: number;
        }) => ({
            _key: crypto.randomUUID(),

            product: {
                _type: "reference",
                _ref: item.productId,
            },

            variantKey: item.variantKey,
            flavor: item.flavor,
            taille: item.taille,
            unitPrice: Number(item.price),
            quantity: item.quantity,
            totalPrice: Number(item.price) * item.quantity,
        })
    );


    const order = await backendClient.create({
        _type: "order",

        orderNumber,
        stripeCheckoutSessionId: id,
        stripePaymentIntentId: payment_intent,

        customerName,
        email: customerEmail,
        userId: userId,

        phoneNumber: session.customer_details?.phone || "",

        shippingAddress: {
            name: session.customer_details?.name || "",
            line1: shipping?.line1 || "",
            line2: shipping?.line2 || "",
            city: shipping?.city || "",
            postalCode: shipping?.postal_code || "",
            state: shipping?.state || "",
            country: shipping?.country || "",
        },

        stripeCustomerId: String(session.customer),
        currency,
        amountDiscount:
            total_details?.amount_discount
                ? total_details.amount_discount / 100
                : 0,

        products: sanityProducts,

        totalPrice: amount_total ? amount_total / 100 : 0,
        status: "paid",
        orderDate: new Date().toISOString(),

        invoice: invoice
            ? {
                id: invoice.id,
                number: invoice.number,
                hosted_invoice_url: invoice.hosted_invoice_url,
            }
            : null,
    });
    return order;
}