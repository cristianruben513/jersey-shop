import type { FooterItem, MainNavItem } from "@/types"
import { productConfig } from "@/config/product"
import { slugify } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Jerseyshop",
  description:
    "Lo mejor de las camisetas de futbol, gorras y mas en un solo lugar",
  url: "https://skateshop.sadmn.com",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Productos",
          href: "/products",
          description: "Explora nuestra colección de productos.",
          items: [],
        },
      ],
    },
    ...productConfig.categories.map((category) => ({
      title: category.name,
      items: [
        {
          title: "Todos los productos",
          href: `/categories/${slugify(category.name)}`,
          description: `Nuestra coleccion completa de ${category.name}.`,
          items: [],
        },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.name,
          href: `/categories/${slugify(category.name)}/${slugify(subcategory.name)}`,
          description: subcategory.description,
          items: [],
        })),
      ],
    })),
  ] satisfies MainNavItem[],
  footerNav: [

  ] satisfies FooterItem[],
}