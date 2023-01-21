export interface Products {
  products: Array<SingleProduct>,
  total: number,
  skip: number,
  limit: number
}

export type SingleProduct = {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[],
}
