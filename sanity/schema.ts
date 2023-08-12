import { type SchemaTypeDefinition } from "sanity";
import productSchema from "./schemas/product-schema";
import categorySchema from "./schemas/category-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema],
};
