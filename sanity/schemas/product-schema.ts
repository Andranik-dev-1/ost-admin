export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Product Images",
      of: [{ type: "image" }],
      options: {
        layout: "grid", // You can choose grid or list layout for the images
      },
      validation: (Rule: any) =>
        Rule.required().max(4).warning("Maximum of 4 images allowed."),
    },
    {
      name: "name",
      type: "object",
      title: "Name",
      fields: [
        {
          name: "am",
          type: "string",
          title: "Armenian Name",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "en",
          type: "string",
          title: "English Name",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "ru",
          type: "string",
          title: "Russian Name",
          validation: (Rule: any) => Rule.required(),
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      type: "object",
      title: "Description",
      fields: [
        {
          name: "am",
          type: "string",
          title: "Armenian description",
        },
        {
          name: "en",
          type: "string",
          title: "English description",
        },
        {
          name: "ru",
          type: "string",
          title: "Russian description",
        },
      ],
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "category" }], // This specifies that the reference should point to documents of type 'category'
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "isFeatured",
      type: "boolean",
      title: "IsFeatured",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "isArchived",
      type: "boolean",
      title: "IsArchived",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
