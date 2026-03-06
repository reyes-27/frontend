import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import endpoints from '../../endpoints';
import axios from 'axios'

const useProducts = () => {
    const queryClient = useQueryClient()
    const [product_detail, isLoading] = useQuery(
        {
            queryKey : ['product_detail'],
            queryFn : (slug) => axios.get(endpoints.ecommerce['product-detail'](slug))
        }
    )
}