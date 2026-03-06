import ERRORPNG from '../../assets/error/error.png';
import { useState } from 'react';
import AddToCart from '../cart/AddToCart';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Logic for Stock styling
  const isLowStock = product.stock < 10;
  const isOutOfStock = product.stock <= 0;

  const primaryImage = product.image_set?.find(img => img.level === 0)?.image 
    || product.image_set?.[0]?.image 
    || ERRORPNG;

  return (
    <div className="group relative bg-[#1a2238]/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] flex flex-col h-full">
      
      {/* Image Container with Zoom Effect */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-950/20 p-6">
        <img 
          src={primaryImage} 
          alt={product.name}
          className="size-full object-contain transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-4">
          <Link to={`/products/${product.slug}`} className="text-left font-bold text-gray-100 text-lg line-clamp-2 hover:text-blue-400 transition-colors cursor-pointer leading-snug">
            {product.name}
          </Link>
          
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-blue-500">
                {Number(product.final_price).toLocaleString('es-CL')}
              </span>
              <span className="text-xs font-bold text-blue-400/60 uppercase tracking-tighter">CLP$</span>
            </div>

            {/* Dynamic Stock Indicator */}
            <div className="text-right">
                <p className={`text-[10px] font-black uppercase tracking-widest ${isLowStock ? 'text-rose-500' : 'text-emerald-500/80'}`}>
                    {isOutOfStock ? 'Sin Stock' : isLowStock ? 'Stock Crítico' : 'Disponible'}
                </p>
                <p className={`text-sm font-mono font-bold ${isLowStock ? 'text-rose-500' : 'text-emerald-400'}`}>
                    {product.stock} units
                </p>
            </div>
          </div>
        </div>

        {/* Quantity and Add to Cart Section */}
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between bg-black/20 rounded-xl p-1 border border-white/5">
            <span className="text-xs font-bold text-gray-500 ml-3 uppercase italic">Qty</span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="size-8 flex items-center justify-center rounded-lg bg-gray-800 text-white hover:bg-gray-700 active:scale-90 transition-all"
                disabled={isOutOfStock}
              >
                -
              </button>
              <span className="text-white font-bold w-6 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="size-8 flex items-center justify-center rounded-lg bg-gray-800 text-white hover:bg-gray-700 active:scale-90 transition-all"
                disabled={isOutOfStock || quantity >= product.stock}
              >
                +
              </button>
            </div>
          </div>

          <AddToCart 
            product={product} 
            quantity={quantity} 
            disabled={isOutOfStock}
            className={`w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-[#6554b4] text-white rounded-xl font-bold shadow-lg hover:brightness-110 active:scale-[0.98] transition-all ${isOutOfStock ? 'opacity-30 cursor-not-allowed grayscale' : 'opacity-100'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;