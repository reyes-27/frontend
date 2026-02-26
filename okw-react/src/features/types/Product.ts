import { Catergory } from "./Categories";
import { Seller } from "./Seller";
import { ProductImage } from "./ProductImage";

export interface Product{
    url:string;
    image_set: ProductImage[];
    seller:Seller;
    categories:Catergory[];
    unit_price: number;
    profit: number;
    discount: number;
    final_price: string;
    slug: string;
    name: string;
    description: string;
    stock: number;
    rate: number;
    visibility: "pu" | "pr" | "un";
}