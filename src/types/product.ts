import { type StoredFile } from "./storedFile";
import { type LifecycleDates } from "./lifecycleDates";

export type Product = {
  id: string;
  name: string;
  description?: string;
  images: StoredFile[] | null;
  categoryId: string;
  subcategoryId?: string;
  price: number;
  originalPrice: number;
  inventory: number;
  rating: number;
  status: "active" | "inactive" | "discontinued";
} & LifecycleDates;
