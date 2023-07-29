import { cartItem } from "./cartItem";

export interface OrderType {
  zipCode: string;
  state: string;
  city: string;
  adress: string;
  houseNum: string;
  order: cartItem[];
  total: number;
  date: string;
}
