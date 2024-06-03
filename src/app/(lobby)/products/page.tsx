import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Shell } from "@/components/shell"
import { env } from "@/env.js"
import { type Metadata } from "next"

import { ProductCard } from "@/components/product-card"
import { type Product } from "@/types/product"
import { products } from "../_data/products"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Productos",
  description: "Buy products from our stores",
}

export default async function ProductsPage() {
  //const productsTransaction = await getProducts(searchParams)

  return (
    <Shell>
      <PageHeader className="mt-4">
        <PageHeaderHeading size="sm">
          Todos los productos
        </PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Encuentra los productos que necesitas
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Shell>
  )
}