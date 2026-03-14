import { ProductImage } from "../../products/types/ProductImage";

export interface OrderItemType {
  id: string;
  product: string; 
  product_name: string; 
  product_slug:string;
  product_image:ProductImage;
  price_at_purchase: string; 
  quantity: number;
  total: string; 
}