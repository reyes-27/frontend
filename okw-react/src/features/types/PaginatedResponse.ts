import {Product} from './Product'

export interface PaginatedResponse{
    links:{
        next:string|null,
        previous:string|null
    };
    count: number;
    page_count: number;
    results: {
        data: Product[]
    }
}
