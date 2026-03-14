import { OrderItemType } from "./OrderItemType";

export interface OrderType {
  id: string;
  status: 'pending' | 'completed' | 'cancelled' | 'shipped';
  order_total: string;
  items: OrderItemType[];
  payment_status: string; 
  payment_method: string; 
  created_at: string;
}