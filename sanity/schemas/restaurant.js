export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating (1-5 Stars)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter value between 1 and 5"),
    },
    {
      name: "genre",
      type: "string",
      title: "Genre",
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
