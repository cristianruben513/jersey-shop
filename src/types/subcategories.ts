import { type LifecycleDates } from "./lifecycleDates";

export type Subcategory = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  categoryId: string;
} & LifecycleDates;
