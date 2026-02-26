import useCart from "./useCart";
import { MinusIcon } from "@heroicons/react/20/solid";

const DecrementItem = ({ product_slug, currentQuantity }) => {
    const { addItem } = useCart();

    const handleDecrement = () => {
        if (currentQuantity > 1) {
            // Sending -1 to subtract from the existing total in Django
            addItem.mutate({ product_slug: product_slug, quantity: -1 });
        }
    };

    return (
        <button
            onClick={handleDecrement}
            disabled={addItem.isLoading || currentQuantity <= 1}
            className="p-1 rounded-md text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all disabled:opacity-50 disabled:hover:bg-transparent"
            title="Disminuir cantidad"
        >
            <MinusIcon className="size-4" />
        </button>
    );
};

export default DecrementItem;