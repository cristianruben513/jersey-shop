import { Shell } from "@/components/shell";
import CategoriesSection from "./sections/categories-section";
import HeaderSection from "./sections/header-section";
import ProductsSections from "./sections/products-section";

export default function HomePage() {
  return (
    <Shell className="max-w-6xl gap-0">
      <main>
        <HeaderSection />
        <CategoriesSection />
        <ProductsSections />
      </main>
    </Shell>
  );
}
