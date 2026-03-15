import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import endpoints from '../../endpoints';
import axios from 'axios'
import Cookies from "universal-cookie";

const cookies = new Cookies()
const csrftoken = cookies.get('csrftoken')
const useCart = () => {
    const queryClient = useQueryClient()
    const {data:cart, isLoading} = useQuery(
        {
            queryKey: ['cart'],
            queryFn: () => axios.get(endpoints.orders['cart-detail']).then(res => res.data).catch(e =>console.log(e))

        }
    )

    const addItem = useMutation({
        mutationFn: (payload) => axios.post(endpoints.orders['cart-items'], payload,{headers:{'X-CSRF-TOKEN':csrftoken}}).then(res => console.log(res)).catch(e => console.log(e)),
        onSuccess: () => queryClient.invalidateQueries(['cart'])
    })

    const decrementItem = useMutation({
        mutationFn: (payload)=> axios.patch(endpoints.orders['cart-items'], payload),
        onSuccess: ()=> queryClient.invalidateQueries(['cart'])
    })

    const removeItem = useMutation({
        mutationFn: (slug) => axios.delete(`${endpoints.orders['cart-items']}${slug}/`, {headers:{'X-CSRF-TOKEN':csrftoken}}),
        onSuccess: ()=> queryClient.invalidateQueries(['cart'])
    })

    
    return {cart, isLoading, addItem, removeItem, decrementItem}
}

export default useCart