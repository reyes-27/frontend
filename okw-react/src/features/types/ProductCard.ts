import { ProductImage } from "./ProductImage";
export interface ProductCard{
        url:string;
        image_set: ProductImage;
        unit_price: number;
        discount: number;
        final_price: string;
        name: string;
        stock: number;
}