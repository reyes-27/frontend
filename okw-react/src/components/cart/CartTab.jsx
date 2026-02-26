import  useCart  from './useCart'; // Adjust path as needed
import CartPng from '../../assets/cart/cart.png'
const CartTab = ({ setOpen }) => {
  const { cart } = useCart();
  const itemCount = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <div 
      className="fixed bottom-10 right-6 z-40 group cursor-pointer"
      onClick={() => setOpen(true)}
    >
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>

      {/* Main Button */}
      <div className="relative flex items-center justify-center w-16 h-16 
        bg-[#1a2238]/80 backdrop-blur-md border border-white/10
        rounded-2xl shadow-2xl transition-all duration-300 
        group-hover:scale-110 group-active:scale-95 group-hover:border-blue-400/50"
      >
        {/* The Icon */}
        <div className="relative">
          <img 
            src={CartPng} 
            alt="Cart" 
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:-rotate-12" 
          />
          
          {/* Badge / Counter */}
          {itemCount > 0 && (
            <span className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center 
              rounded-full bg-gradient-to-tr from-blue-500 to-[#6554b4] 
              text-[10px] font-bold text-white ring-2 ring-[#1a2238] animate-in zoom-in duration-300"
            >
              {itemCount}
            </span>
          )}
        </div>

        {/* Subtle Bottom Glow Line */}
        <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default CartTab;