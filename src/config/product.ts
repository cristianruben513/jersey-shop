import type { Category, Subcategory } from "@/db/schema"
import { generateId } from "@/lib/id"

export type ProductConfig = typeof productConfig

export const productConfig = {
  categories: [
    {
      id: generateId(),
      name: "Skateboards",
      description: "The best skateboards for all levels of skaters.",
      image: "/images/categories/skateboard-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "Decks",
          description: "The board itself.",
        },
        {
          id: generateId(),
          name: "Wheels",
          description: "The wheels that go on the board.",
        },
        {
          id: generateId(),
          name: "Trucks",
          description: "The trucks that go on the board.",
        },
        {
          id: generateId(),
          name: "Bearings",
          description: "The bearings that go in the wheels.",
        }
      ],
    },
    {
      id: generateId(),
      name: "Clothing",
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
    {
      id: generateId(),
      name: "Shoes",
      description: "Rad shoes for long skate sessions.",
      image: "/images/categories/shoes-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "Low Tops",
          description: "Rad low tops shoes for a stylish low-profile look.",
        },
        {
          id: generateId(),
          name: "High Tops",
          description: "Elevate your style with rad high top shoes.",
        },
        {
          id: generateId(),
          name: "Slip-ons",
          description: "Effortless style with rad slip-on shoes.",
        },
      ],
    },
    {
      id: generateId(),
      name: "Accessories",
      description:
        "The essential skateboarding accessories to keep you rolling.",
      image: "/images/categories/backpack-one.webp",
      subcategories: [
        {
          id: generateId(),
          name: "Skate Tools",
          description:
            "Essential tools for maintaining your skateboard, all rad.",
        },
        {
          id: generateId(),
          name: "Bushings",
          description: "Upgrade your ride with our rad selection of bushings.",
        },
        {
          id: generateId(),
          name: "Shock & Riser Pads",
          description:
            "Enhance your skateboard's performance with rad shock and riser pads.",
        },
        {
          id: generateId(),
          name: "Skate Rails",
          description:
            "Add creativity and style to your tricks with our rad skate rails.",
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