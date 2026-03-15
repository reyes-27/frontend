import React from 'react';
import { useParams } from 'react-router-dom';
import useOrders from '../hooks/useOrders';
import type { OrderItemType } from '../types/OrderItemType';


export const OrderDetail: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const { order, isLoading, error } = useOrders(id ?? '');

  if (isLoading) return <div className="p-10 text-slate-500 animate-pulse">Retrieving secure record...</div>;
  if (error || !order) return <div className="p-10 text-red-500">Order not found.</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Header: Status & Meta */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 pb-8 border-b border-slate-800">
          <div>
            <h1 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">
              Order Confirmed
            </h1>
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              ID: {order.id.split('-')[0]}...
            </h2>
            <p className="text-slate-500 text-sm mt-1">Placed on {new Date(order.created_at).toLocaleDateString()}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
              order.status === 'completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
            }`}>
              {order.status}
            </span>
            <p className="text-xs text-slate-500 mt-2 font-mono">Paid via {order.payment_method}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Table of Frozen Items */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold mb-6 text-slate-400 uppercase">Purchased Items</h3>
            {order.items.map((item: OrderItemType) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-6 bg-slate-900/40 border border-slate-800 rounded-xl"
              >
                <div className="flex items-center gap-6">
                  {/* Note: We use the snapshot name here */}
                  <div>
                    <h4 className="font-bold text-lg">{item.product_name}</h4>
                    <p className="text-sm text-slate-500 font-mono">
                      UNIT PRICE: ${item.price_at_purchase} × {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xl text-white">${item.total}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Totals & Delivery Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
              <h3 className="font-bold text-slate-400 mb-6 uppercase tracking-wider">Financial Summary</h3>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Subtotal</span>
                  <span>${order.order_total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Shipping</span>
                  <span className="text-emerald-500">$0.00</span>
                </div>
                <div className="h-px bg-slate-800 my-4" />
                <div className="flex justify-between text-xl font-bold text-white">
                  <span className="font-sans italic">TOTAL</span>
                  <span className="text-emerald-400">${order.order_total}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900/20 border border-slate-800 border-dashed rounded-2xl">
              <h4 className="text-xs font-bold text-slate-500 uppercase mb-4">Payment Status</h4>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium">{order.payment_status}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="mt-12 flex gap-4">
           <button 
             onClick={() => window.print()}
             className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-sm font-bold rounded-lg transition-colors"
           >
             Print Invoice
           </button>
           <button 
             className="px-6 py-2 border border-slate-800 hover:bg-slate-900 text-sm font-bold rounded-lg transition-colors"
           >
             Contact Support
           </button>
        </div>
      </div>
    </div>
  );
};