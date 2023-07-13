import { Product } from "./product";

export interface ProductsFetchResponse {
  products: Product[];
  loading: boolean;
  error: any;
}
