import { env } from "@/env.js"
import type { Metadata } from "next"

import { AlertCard } from "@/components/alert-card"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { ProductCard } from "@/components/product-card"
import { Shell } from "@/components/shell"
import { toTitleCase } from "@/lib/utils"
import type { Product } from "@/types/product"
import { categories } from "../../_data/categories"
import { products } from "../../_data/products"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: toTitleCase(params.category),
    description: `Buy products from the ${params.category} category`,
  }
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const categoryData = categories.find(
    (category) => category.slug === params.category
  )

  const filterProducts: Product[] = products.filter(
    (product) => product.categoryId === categoryData?.id
  )

  return (
    <Shell>
      <PageHeader>
        <PageHeaderHeading size="sm">
          {toTitleCase(categoryData?.name as string)}
        </PageHeaderHeading>
        <PageHeaderDescription size="sm">
          {`Compra de nuestra seccion ${categoryData?.name}`}
        </PageHeaderDescription>
      </PageHeader>

      {filterProducts.length === 0 ? (
        <AlertCard
          title="No hay productos disponibles"
          description={`No hay productos disponibles en la categoria ${categoryData?.name}`}
        />
      ) : (
        <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </Shell>
  )
}