import { CategoryCard } from "../../_components/category-card"
import { categories } from "../../_data/categories"

export default function CategoriesSection() {
  return (
    <section
      className="grid animate-fade-up grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-4"
      style={{ animationDelay: "0.50s", animationFillMode: "both" }}
    >
      {categories.map((category) => (
        <CategoryCard 
          key={category.name} 
          {...category}
        />
      ))}
    </section>
  )
}