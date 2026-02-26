import {PaginatedResponse} from '../../features/types/PaginatedResponse'
import {Product} from '../../features/types/Product'
import {ProductImage} from '../../features/types/ProductImage'
import axios from 'axios'
import endpoints from "../../endpoints"
import { Key, useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import ProductCard from './ProductCard'

const fetchProducts = async (page_number?:number) : Promise<PaginatedResponse> => {
    const response = await axios.get(endpoints['ecommerce']["product-list"] + `?page=${page_number}`);
    return response.data
}

const ProductList = () => {
    const [page, setPage] = useState(1)
    const {data, isLoading} = useQuery<PaginatedResponse>({
        queryKey:['products', page],
        queryFn: () => fetchProducts(page)
    })
    return (
        <div>
            {data?.products.map((product:Product, index: Key | null | undefined) => (
                <ProductCard key={index} product={product}/>

            ))}
        </div>
    )
}