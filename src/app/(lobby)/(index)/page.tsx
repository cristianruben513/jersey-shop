import { ModeToggle } from "@/components/mode-toggle";
import { Shell } from "@/components/shell";
import CategoriesSection from "./sections/categories-section";

export default function HomePage() {
  return (
    <Shell className=" max-w-6xl gap-0">
      <main>
        <CategoriesSection />
      </main>
    </Shell>
  );
}
