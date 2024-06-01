import { generateId } from "@/lib/id"

export type ProductConfig = typeof productConfig

export type Category = {
  id: string
  name: string
  description: string
  image: string
  subcategories: Subcategory[]
}

export type Subcategory = {
  id: string
  name: string
  description: string
}

export const productConfig = {
  categories: [
    {
      id: generateId(),
      name: "Jerseys",
      description: "The best jerseys.",
      image: "/images/categories/skateboard-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "La Liga",
          description: "Equipos de la liga española como el Real Madrid, Barcelona, entre otros",
        },
        {
          id: generateId(),
          name: "Premier League",
          description: "Equipos de la liga inglesa como el Manchester United, Liverpool, entre otros.",
        },
        {
          id: generateId(),
          name: "Serie A",
          description: "Equipos de la liga italiana como la Juventus, Inter de Milan, entre otros.",
        },
        {
          id: generateId(),
          name: "Bundesliga",
          description: "Equipos de la liga alemana como el Bayern Munich, Borussia Dortmund, entre otros.",
        }
      ],
    },
    {
      id: generateId(),
      name: "Gorras",
      description: "Stylish and comfortable skateboarding clothing.",
      image: "/images/categories/clothing-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "T-shirts",
          description: "Cool and comfy tees for effortless style.",
        },
        {
          id: generateId(),
          name: "Hoodies",
          description: "Cozy up in trendy hoodies.",
        },
      ],
    },
  ] satisfies ({
    subcategories: Omit<
      Subcategory,
      "slug" | "categoryId" | "createdAt" | "updatedAt"
    >[]
  } & Pick<Category, "id" | "name" | "description" | "image">)[],
}