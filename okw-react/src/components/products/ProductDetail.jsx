import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeftIcon, StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import AddToCart from '../cart/AddToCart';
import ERRORPNG from '../../assets/error/error.png';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState('')
  const slug = useParams('slug')

  // Stock logic
  const isLowStock = product.stock < 10 && product.stock > 0;
  const isOutOfStock = product.stock <= 0;

  // Image extraction
  const primaryImage = product.image_set?.find(img => img.level === 0)?.image 
    || product.image_set?.[0]?.image 
    || ERRORPNG;

    

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeftIcon className="size-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">Volver al catálogo</span>
        </button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          
          {/* Left: Image Gallery */}
          <div className="relative group">
            <div className="aspect-square rounded-3xl bg-gray-950/50 border border-white/5 overflow-hidden backdrop-blur-3xl flex items-center justify-center p-12">
              <img 
                src={primaryImage} 
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Seller Quick Info Overlay */}
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
               <img src={product.seller.profile_pic} alt="Seller" className="size-12 rounded-full border-2 border-blue-500/50 object-cover" />
               <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Vendido por</p>
                  <p className="font-bold text-gray-200">{product.seller.full_name}</p>
               </div>
               <div className="ml-auto flex items-center gap-1 text-emerald-400">
                  <CheckBadgeIcon className="size-5" />
                  <span className="text-xs font-black italic">VERIFIED</span>
               </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="mt-10 lg:mt-0 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              {product.categories.map(cat => (
                <span key={cat.id} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                  {cat.name}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`size-5 ${i < product.rate ? 'text-yellow-500' : 'text-gray-700'}`} />
                ))}
              </div>
              <span className="text-gray-500 font-bold text-sm">({product.rate} Reseñas)</span>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1a2238] to-transparent border border-white/10 mb-8">
              <p className="text-sm text-gray-400 font-bold uppercase mb-1">Precio Final</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-blue-500 leading-none">
                  ${Number(product.final_price).toLocaleString('es-CL')}
                </span>
                <span className="text-xl font-bold text-blue-400/40 uppercase">CLP</span>
              </div>
            </div>

            {/* Availability & Actions */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-xs font-black uppercase tracking-widest ${isLowStock ? 'text-rose-500' : 'text-emerald-500'}`}>
                    {isOutOfStock ? 'Agotado' : isLowStock ? 'Stock Crítico' : 'Stock Disponible'}
                  </p>
                  <p className="text-2xl font-mono font-bold text-white">{product.stock} <span className="text-sm text-gray-500 font-sans uppercase">Unidades</span></p>
                </div>

                <div className="flex items-center gap-4 bg-black/40 p-2 rounded-2xl border border-white/5">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="size-10 flex items-center justify-center rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition-all active:scale-90 disabled:opacity-50"
                    disabled={isOutOfStock}
                  > - </button>
                  <span className="text-xl font-black text-white w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="size-10 flex items-center justify-center rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition-all active:scale-90 disabled:opacity-50"
                    disabled={isOutOfStock || quantity >= product.stock}
                  > + </button>
                </div>
              </div>

              <AddToCart 
                product={product} 
                quantity={quantity} 
                className={`w-full py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all active:scale-95 shadow-2xl ${
                  isOutOfStock 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-blue-500/20'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Technical Description (HTML Content) */}
        <div className="mt-20 border-t border-white/5 pt-12">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-8 flex items-center gap-3">
             <span className="size-2 bg-blue-500 rounded-full animate-pulse"></span>
             Especificaciones Técnicas
          </h2>
          <div 
            className="prose prose-invert prose-blue max-w-none 
              prose-strong:text-blue-400 prose-ul:list-disc prose-li:my-2
              text-gray-400 leading-relaxed font-medium"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;