export const CartSummary = ({ subtotal, onCheckout, onContinue }) => (
  <div className="border-t border-white/10 px-4 py-6 sm:px-6 bg-gray-950/50 backdrop-blur-md">
    <div className="flex justify-between text-lg font-bold text-white">
      <p>Subtotal</p>
      <p className="text-blue-400 text-xl">${Number(subtotal).toLocaleString('es-CL')} CLP</p>
    </div>
    <p className="mt-1 text-sm text-gray-500 italic">
      IVA incluido. Envío calculado al finalizar.
    </p>
    <div className="mt-6 space-y-4">
      <button
        onClick={onCheckout}
        className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-base font-black text-white shadow-lg shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        Finalizar Compra
      </button>
      <button
        type="button"
        onClick={onContinue}
        className="w-full text-center text-sm font-bold text-gray-400 hover:text-white transition-colors"
      >
        O continuar comprando <span aria-hidden="true"> &rarr;</span>
      </button>
    </div>
  </div>
);