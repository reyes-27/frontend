import React from 'react';
import useOrders from '../hooks/useOrders';
import useCart from '../../cart/useCart';
import { useNavigate } from "react-router-dom";
import type { CheckoutPayload } from '../types/CheckoutPayload';

const OrderPreview:React.FC = () => {
    const {process_checkout} = useOrders('');
    const {cart, isLoading} = useCart();
    const navigate = useNavigate();
    const cartItems = cart?.items || [];
    const cartTotal = cart?.total_price || 0;

    const handleCheckout = async (payload: CheckoutPayload):Promise<void> => {
        try {
            process_checkout.mutate(payload, {
                onSuccess: (data) => {
                    navigate(`/orders/${data.order_id}/`)
                },
                onError: (error) => console.error('Checkout failed:', error)
            })
        } catch (error) {
            console.error('Checkout error:', error);
        }
    }

    if (isLoading) return <div className="text-white p-10">Loading snapshot...</div>;
    return(
            <div>

            </div>
    )
    
}

export default OrderPreview;