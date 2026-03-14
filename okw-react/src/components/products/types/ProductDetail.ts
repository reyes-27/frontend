import type { ProductImage } from "./ProductImage";
import type { SellerType } from "../../../accounts/types/SellerType";
import type { CategoryType } from "./CategoryType";

export interface ProductType {
  url: string;
  slug: string;
  name: string;
  description: string;
  
  unit_price: string; 
  final_price: string;
  profit: number;
  discount: number;
  
  stock: number;
  rate: number;
  visibility: "pu" | "pr" | "hi";
  
  image_set: ProductImage[];
  seller: SellerType;
  categories: CategoryType[];
}