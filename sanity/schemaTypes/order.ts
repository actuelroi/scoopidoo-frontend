import { ShoppingBasketIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: ShoppingBasketIcon,

  fields: [
    defineField({
      name: "orderNumber",
      type: "string",
    }),

    defineField({
      name: "stripeCheckoutSessionId",
      type: "string",
    }),

    defineField({
      name: "stripePaymentIntentId",
      type: "string",
    }),

    defineField({
      name: "customerName",
      type: "string",
    }),

    defineField({
      name: "email",
      type: "string",
    }),

    defineField({
      name: "userId",
      type: "string",
    }),

    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),

    defineField({
      name: "shippingAddress",
      title: "Shipping Address",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Recipient Name",
          type: "string",
        },
        {
          name: "line1",
          title: "Address Line 1",
          type: "string",
        },
        {
          name: "line2",
          title: "Address Line 2",
          type: "string",
        },
        {
          name: "city",
          type: "string",
        },
        {
          name: "postalCode",
          type: "string",
        },
        {
          name: "state",
          type: "string",
        },
        {
          name: "country",
          type: "string",
        },
      ],
    }),

    defineField({
      name: "currency",
      type: "string",
    }),

    defineField({
      name: "totalPrice",
      type: "number",
    }),

    defineField({
      name: "amountDiscount",
      type: "number",
    }),

    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Paid", value: "paid" },
          { title: "Pending", value: "pending" },
          { title: "Cancelled", value: "cancelled" },
          { title: "Refunded", value: "refunded" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
        ],
      },
    }),

    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
    }),

    defineField({
      name: "orderDate",
      type: "datetime",
    }),

    defineField({
      name: "products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              type: "reference",
              to: [{ type: "product" }],
            },
            {
              name: "variantKey",
              type: "string",
            },
            {
              name: "flavor",
              type: "string",
            },
            {
              name: "taille",
              type: "string",
            },
            {
              name: "unitPrice",
              type: "number",
            },
            {
              name: "quantity",
              type: "number",
            },
            {
              name: "totalPrice",
              type: "number",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "invoice",
      type: "object",
      fields: [
        {
          name: "id",
          type: "string",
        },
        {
          name: "number",
          type: "string",
        },
        {
          name: "hosted_invoice_url",
          type: "url",
        },
      ],
    }),
  ],
});