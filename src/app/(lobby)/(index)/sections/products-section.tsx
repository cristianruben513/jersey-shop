import { ContentSection } from "@/components/content-section"
import { ProductCard } from "@/components/product-card"
import { products } from "../../_data/products"
import { Product } from "@/types/product"

export default function ProductsSections() {
  return (
    <ContentSection
      title="Productos destacados"
      href="/products"
      linkText="Ver todos los productos"
      className="pt-14 md:pt-20 lg:pt-24"
    >
      {products.map((product: Product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
        />
      ))}
    </ContentSection>
  )
}