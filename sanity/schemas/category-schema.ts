export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "name",
      type: "object",
      title: "Name",
      fields: [
        {
          name: "am",
          type: "string",
          title: "Armenian Name",
        },
        {
          name: "en",
          type: "string",
          title: "English Name",
        },
        {
          name: "ru",
          type: "string",
          title: "Russian Name",
        },
      ],
    },
    {
      name: "prioritet",
      type: "number",
      title: "Prioritet",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
