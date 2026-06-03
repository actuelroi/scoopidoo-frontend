import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    
   defineField({
            name: "items",
            title: "Items",
            type: "array",
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required(),
            description: "Declare each items"
        }),
  ],
  preview: {
    select: {
      title: "title",

    },
  },
});