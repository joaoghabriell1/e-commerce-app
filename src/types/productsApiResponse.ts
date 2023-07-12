import { Product } from "./product";

export interface ProductsApiResponse {
  products: {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  };
}
