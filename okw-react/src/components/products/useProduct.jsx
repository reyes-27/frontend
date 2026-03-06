import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import endpoints from '../../endpoints';
import axios from 'axios'

const useProduct = (slug) => {
    const [product, isLoading, isError, error] = useQuery(
        {
            queryKey : ['product', slug],
            queryFn : (slug) => axios.get(endpoints.ecommerce['product-detail'](slug)).then((res) => res.data),
            enabled: !!slug
        }
    )

    return {product, isLoading, isError, error}
}

export default useProduct