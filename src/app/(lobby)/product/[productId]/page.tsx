import { env } from "@/env.js"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { products } from "../../_data/products"

import { ProductCard } from "@/components/product-card"
import { ProductImageCarousel } from "@/components/product-image-carousel"
import { Rating } from "@/components/rating"
import { Shell } from "@/components/shell"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/formatPrice"
import { toTitleCase } from "@/lib/utils"

import { type Product } from "@/types/product"
import { AddToCartForm } from "./_components/add-to-cart-form"

interface ProductPageProps {
  params: {
    productId: string
  }
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const productId = decodeURIComponent(params.productId)

  const product = products.find((product: Product) => product.id === productId)

  if (!product) {
    return {}
  }

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: toTitleCase(product.name),
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = decodeURIComponent(params.productId)

  const product = products.find((product: Product) => product.id === productId)

  if (!product) {
    notFound()
  }

  // Get other products excluding the current product
  const otherProducts = products.filter((p: Product) => p.id !== productId)

  return (
    <Shell className="pb-12 md:pb-14 max-w-6xl">
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <ProductImageCarousel
          className="w-full md:w-2/5 border rounded-xl"
          images={product.images ?? []}
          options={{
            loop: true,
          }}
        />
        <Separator className="mt-4 md:hidden" />
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">{product.name}</h2>
            <p className="text-base text-muted-foreground">
              {formatPrice(product.price)}
            </p>
          </div>
          <Separator className="my-1.5" />
          <p className="text-base text-muted-foreground">
            {product.inventory} in stock
          </p>
          <div className="flex items-center justify-between">
            <Rating rating={Math.round(product.rating / 5)} />
          </div>
          <AddToCartForm productId={productId} showBuyNow={true} />
          <Separator className="mt-5" />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="description"
          >
            <AccordionItem value="description" className="border-none">
              <AccordionTrigger>
                Descripcion
              </AccordionTrigger>
              <AccordionContent>
                {product.description ??
                  "No description is available for this product."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Separator className="md:hidden" />
        </div>
      </div>
      {otherProducts.length > 0 ? (
        <div className="space-y-6 overflow-hidden">
          <h2 className="line-clamp-1 flex-1 text-2xl font-bold">
            Mas Productos
          </h2>
          <ScrollArea className="pb-3.5">
            <div className="flex gap-4">
              {otherProducts.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="min-w-[260px]"
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal"/>
          </ScrollArea>
        </div>
      ) : null}
    </Shell>
  )
}