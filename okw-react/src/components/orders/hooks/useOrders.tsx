import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import endpoints from '../../../endpoints';
import Cookies from "universal-cookie";
import axios from 'axios'
import type { CheckoutPayload } from '../types/CheckoutPayload';
import type { CheckoutResponse } from '../types/CheckoutResponse';
import type { OrderType } from '../types/OrderType';
const cookies = new Cookies()
const csrftoken = cookies.get('csrftoken')
const useOrders = (id: string|undefined) => {
    const queryClient = useQueryClient()
    const { data: order, isLoading, error } = useQuery<OrderType>({
        queryKey: ['order', id],
        queryFn: (id) => axios.get(`/api/ecommerce/orders/${id}/`).then(res => res.data),
        enabled: !!id,
    });
    const process_checkout = useMutation<CheckoutResponse, Error, CheckoutPayload>({
        mutationFn: async (payload: CheckoutPayload) => {
            const res = await axios.post(endpoints.orders['cart/checkout'], payload, {
                headers: { 'X-CSRF-TOKEN': csrftoken }
            });
            return res.data;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] })
    });


    return { order, isLoading, error, process_checkout };
}

export default useOrders