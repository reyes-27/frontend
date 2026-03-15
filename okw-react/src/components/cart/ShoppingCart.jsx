import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { useNavigate } from 'react-router-dom';
import useCart from './useCart';


export default function ShoppingCart({ open, setOpen }) {
  const { cart, isLoading, removeItem, process_checkout } = useCart();
  const navigate = useNavigate()
  const handleRemove = (id) => {
    removeItem.mutate(id);
  };

  const handleCheckout = () => {
    process_checkout.mutate();
    // navigate('/checkout'); 
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />
      
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition-all duration-500">
              <div className="flex h-full flex-col bg-[#0b0f1a] shadow-2xl border-l border-white/10">
                
                {/* Header */}
                <div className="px-4 py-6 sm:px-6 border-b border-white/5 flex items-center justify-between">
                  <DialogTitle className="text-xl font-black text-white tracking-tighter uppercase">
                    Tu Carrito <span className="text-blue-500 ml-2">[{cart?.items?.length || 0}]</span>
                  </DialogTitle>
                  <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-white/5 text-gray-400 transition-all">
                    <XMarkIcon className="size-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 scrollbar-thin scrollbar-thumb-gray-800">
                  {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
                      <div className="size-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                      <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Sincronizando...</p>
                    </div>
                  ) : (
                    <ul role="list" className="-my-6 divide-y divide-white/5">
                      {cart?.items?.length > 0 ? (
                        cart.items.map((item) => (
                          <CartItem 
                            key={item.id} 
                            product={{
                              id: item.id,
                              slug: item.product__slug, // Needed for increment/decrement
                              name: item.product__name,
                              price: item.product__unit_price,
                              stock: item.product__stock,
                              quantity: item.quantity,
                              imageSrc: item.image,
                            }}
                            onRemove={handleRemove}
                          />
                        ))
                      ) : (
                        <div className="py-20 text-center">
                          <p className="text-gray-500 font-medium">El carrito está vacío</p>
                        </div>
                      )}
                    </ul>
                  )}
                </div>

                {/* Footer */}
                {!isLoading && cart?.items?.length > 0 && (
                  <CartSummary 
                    subtotal={cart?.total_price || 0} 
                    onContinue={() => setOpen(false)} 
                    onCheckout={handleCheckout}
                  />
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

