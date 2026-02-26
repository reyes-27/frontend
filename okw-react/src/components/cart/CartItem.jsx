import DecrementItem from "./DecrementItem";
import IncrementItem from "./IncrementItem";
import ERRORPNG from '../../assets/error/error.png'

export const CartItem = ({ product, onRemove }) => {
  // Logic for Stock styling
  const isLowStock = product.stock < 10;
  const isOutOfStock = product.stock <= 0;

  return (
    <li className="flex py-6 border-b border-white/5 last:border-0 transition-all hover:bg-white/[0.02] px-2 rounded-xl">
      {/* Image Wrapper */}
      <div className="size-24 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-inner relative">
        <img
          src={product.imageSrc || ERRORPNG}
          alt={product.imageAlt}
          className={`size-full object-contain p-2 ${isOutOfStock ? 'opacity-30 grayscale' : ''}`} 
        />
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-black text-white bg-red-600 px-1 rounded-sm uppercase">Sin Stock</span>
          </div>
        )}
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-semibold text-white leading-tight">
            <h3 className="max-w-[180px] truncate">
              <a href={product.url} className="hover:text-blue-400 transition-colors uppercase tracking-tight">
                {product.name}
              </a>
            </h3>
            <p className="ml-4 text-blue-400 font-bold">
              ${Number(product.price).toLocaleString('es-CL')}
            </p>
          </div>
          
          {/* Stock Indicator - Matching ProductCard Style */}
          <div className="mt-1 flex items-center gap-2">
            <div className={`size-1.5 rounded-full animate-pulse ${isLowStock ? 'bg-rose-500' : 'bg-emerald-500'}`} />
            <p className={`text-[10px] font-bold uppercase tracking-widest ${isLowStock ? 'text-rose-500' : 'text-emerald-500/80'}`}>
              {isOutOfStock ? 'Agotado' : isLowStock ? `¡Solo ${product.stock} restantes!` : `${product.stock} en stock`}
            </p>
          </div>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          {/* Quantity Controls */}
          <div className="flex items-center gap-3 bg-black/20 p-1 rounded-lg border border-white/5">
            <DecrementItem 
              product_slug={product.slug} 
              currentQuantity={product.quantity} 
            />
            <span className="text-white font-mono font-bold min-w-[20px] text-center">
              {product.quantity}
            </span>
            <IncrementItem 
              product_slug={product.slug} 
              disabled={product.quantity >= product.stock} // Disable if max stock reached
            />
          </div>

          <button
            type="button"
            onClick={() => onRemove(product.id)}
            className="font-bold text-gray-500 hover:text-rose-500 transition-colors bg-white/5 px-3 py-1 rounded-lg border border-white/5 hover:border-rose-500/20"
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};