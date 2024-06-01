import type { FooterItem, MainNavItem } from "@/types"
import { productConfig } from "@/config/product"
import { slugify } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

const links = {
  x: "https://twitter.com/sadmann17",
  github: "https://github.com/sadmann7/skateshop",
  discord: "https://discord.com/users/sadmann7",
}

export const siteConfig = {
  name: "Jerseyshop",
  description:
    "Lo mejor de las camisetas de futbol, gorras y mas en un solo lugar",
  url: "https://skateshop.sadmn.com",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  links,
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
        {
          title: "Nuestro Blog",
          href: "/blog",
          description: "Lee nuestras últimas noticias y novedades.",
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
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "X",
          href: links.x,
          external: true,
        },
        {
          title: "GitHub",
          href: links.github,
          external: true,
        },
        {
          title: "Discord",
          href: links.discord,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
}