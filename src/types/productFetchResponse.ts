import { ProductsApiResponse } from "./productsApiResponse";

export interface ProductsFetchResponse {
  products: ProductsApiResponse | null;
  loading: boolean;
  error: any;
}
