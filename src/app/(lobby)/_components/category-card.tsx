import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { BoxIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

interface CategoryCardProps {
  category: {
    name: string
    description: string
    slug: string
    image: string
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      className="relative rounded-lg overflow-hidden group"
      href={`/collections/${category.slug}`}
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-300 ease-in-out"
        src={category.image}
        alt={category.name}
        fill
      />
      <div className="absolute inset-0 bg-black/60" />

      <Card className="h-full transition-colors relative bg-transparent justify-between flex flex-col">
        <CardHeader className="flex-1 z-10">
          <CardTitle className="capitalize mb-1 text-white">
            {category.name}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-balance text-neutral-200 ">
            {category.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-auto">
          <React.Suspense fallback={<Skeleton className="h-4 w-20" />}>
            <ProductCount quantity={30} />
          </React.Suspense>
        </CardContent>
      </Card>
    </Link>
  )
}

async function ProductCount({ quantity }: { quantity: number }) {
  return (
    <div className="flex w-fit items-center text-[0.8rem] text-muted-foreground bg-white/40 backdrop-blur-sm rounded-full px-2 py-1 text-white">
      <BoxIcon
        className="mr-1.5 size-3.5"
        aria-hidden="true"
      />
      {quantity} productos
    </div>
  )
}