import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Cotton T-Shirt",
    description: "A simple cotton t-shirt for everyday wear",
    images: [
      {
        id: "1",
        name: "Cotton T-Shirt",
        url: "https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20230927/c4083e140b4845592f8d6a65600b022a.png=z-780,780_f-webp",
      }
    ],
    categoryId: "1",
    price: 25,
    originalPrice: 30,
    inventory: 100,
    rating: 4.5,
    status: "active",
    createdAt: "2021-06-01T12:00:00Z",
  },
  {
    id: "2",
    name: "Leather Jacket",
    description: "A classic leather jacket for a timeless look",
    images: [
      {
        id: "2",
        name: "Leather Jacket",
        url: "https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20240516/a0addad37e6fdf1d43b4e9fc73f6bfa2.png=z-780,780_f-webp",
      },
    ],
    categoryId: "1",
    price: 150,
    originalPrice: 200,
    inventory: 50,
    rating: 4.8,
    status: "active",
    createdAt: "2021-06-02T12:00:00Z",
  },
  {
    id: "3",
    name: "Denim Jeans",
    description: "A pair of denim jeans for a casual look",
    images: [
      {
        id: "3",
        name: "Denim Jeans",
        url: "https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20240416/69dd76159042c96a14301370d3bf2876.png=z-780,780_f-webp",
      },
    ],
    categoryId: "1",
    price: 50,
    originalPrice: 60,
    inventory: 75,
    rating: 4.3,
    status: "active",
    createdAt: "2021-06-03T12:00:00Z",
  },
  {
    id: "4",
    name: "Sneakers",
    description: "A pair of stylish sneakers for everyday wear",
    images: [
      {
        id: "4",
        name: "Sneakers",
        url: "https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20240531/bfee3474ee80dfe12319ae1eb59383a3.png=z-780,780_f-webp"
      },
    ],
    categoryId: "1",
    price: 100,
    originalPrice: 120,
    inventory: 80,
    rating: 4.6,
    status: "active",
    createdAt: "2021-06-04T12:00:00Z",
  },
  {
    id: "5",
    name: "Polo Shirt",
    description: "A classic polo shirt for a smart casual look",
    images: [
      {
        id: "5",
        name: "Polo Shirt",
        url: "https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20230708/432e375de599720783bb337209250e0a.png=z-780,780_f-webp",
      },
    ],
    categoryId: "1",
    price: 35,
    originalPrice: 40,
    inventory: 90,
    rating: 4.4,
    status: "active",
    createdAt: "2021-06-05T12:00:00Z",
  },
  {
    id: "6",
    name: "Hoodie",
    description: "A comfortable hoodie for a relaxed look",
    images: [
      {
        id: "6",
        name: "Hoodie",
        url: "https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20230721/665ce9cfb0315bb4ec2b44e2cc867d72.png=z-780,780_f-webp"
      },
    ],
    categoryId: "1",
    price: 75,
    originalPrice: 90,
    inventory: 60,
    rating: 4.7,
    status: "active",
    createdAt: "2021-06-06T12:00:00Z",
  },
]