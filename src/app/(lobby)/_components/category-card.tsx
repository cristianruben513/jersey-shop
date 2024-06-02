import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Category } from "@/types/categories"
import Image from "next/image"
import Link from "next/link"

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

      <Card className="h-full transition-colors relative bg-transparent justify-between flex flex-col md:py-5 aspect-square md:aspect-auto">
        <CardHeader className="flex-1 z-10">
          <CardTitle className="capitalize mb-1 text-white leading-7 text-center md:text-start my-auto">
            {name}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-balance text-neutral-200 hidden md:block ">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
