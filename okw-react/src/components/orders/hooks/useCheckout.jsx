import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import endpoints from '../../endpoints';
import Cookies from "universal-cookie";
import axios from 'axios'

const cookies = new Cookies()
const csrftoken = cookies.get('csrftoken')
const useCheckout = () => {
    const queryClient = useQueryClient()

    const process_checkout = useMutation(
        {
            mutationFn : (payload) => axios.post(endpoints.ecommerce['cart/checkout'], payload).then((res) => res.data),
            onSuccess: () => queryClient.invalidateQueries(['cart'])
        }
    )

    return process_checkout
}

export default useCheckout