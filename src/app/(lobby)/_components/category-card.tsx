import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Category } from "@/types/categories"
import { BoxIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

export function CategoryCard({ 
  id,
  name,
  description,
  slug,
  image,
  status,
}: Category) {
  return (
    <Link
      className="relative rounded-lg overflow-hidden group"
      href={`/collections/${slug}`}
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-300 ease-in-out"
        src={image}
        alt={name}
        fill
      />
      <div className="absolute inset-0 bg-black/60" />

      <Card className="h-full transition-colors relative bg-transparent justify-between flex flex-col">
        <CardHeader className="flex-1 z-10">
          <CardTitle className="capitalize mb-1 text-white">
            {name}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-balance text-neutral-200 ">
            {description}
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