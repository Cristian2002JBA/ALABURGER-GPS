import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isLoading?: boolean;
  inCartCount?: number;
}

export const ProductCard = ({ product, onAddToCart, isLoading, inCartCount = 0 }: ProductCardProps) => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden hover:border-[#FFC72C]/30 transition-all duration-300 flex flex-col h-full group relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFC72C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="h-64 flex items-center justify-center relative p-6">
        {/* Glow effect behind burger */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#FFC72C]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {product.imagen || product.foto ? (
          <img
            src={product.imagen || product.foto}
            alt={product.nombre_producto}
            className="w-full h-full object-contain filter drop-shadow-xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 z-10"
          />
        ) : (
          <div className="text-gray-500 text-center z-10">
            <p className="text-lg">Sin imagen</p>
          </div>
        )}
        {inCartCount > 0 && (
          <div className="absolute top-4 right-4 bg-[#DA291C] text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg z-20 animate-fade-in">
            {inCartCount}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="mb-4">
          <h3 className="text-white font-oswald font-bold text-2xl mb-2 tracking-wide group-hover:text-[#FFC72C] transition-colors">{product.nombre_producto}</h3>
          <p className="text-gray-400 text-sm line-clamp-2 font-light">{product.descripcion}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-white/10">
          <span className="text-[#FFC72C] font-bold text-3xl font-oswald">${product.precio}</span>

          <button
            onClick={() => onAddToCart(product)}
            disabled={isLoading}
            className="glow-button bg-[#DA291C] text-white p-3 rounded-full hover:bg-[#ff1f1f] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Agregar al carrito"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
