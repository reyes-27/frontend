import useCart from "./useCart";
import { PlusIcon } from "@heroicons/react/20/solid";

const IncrementItem = ({ product_slug }) => {
    const { addItem } = useCart();

    const handleIncrement = () => {
        // We send 1 to add to the existing total in Django
        addItem.mutate({ product_slug: product_slug, quantity: 1 });
    };

    return (
        <button
            onClick={handleIncrement}
            disabled={addItem.isLoading}
            className="p-1 rounded-md text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all disabled:opacity-50"
            title="Aumentar cantidad"
        >
            <PlusIcon className="size-4" />
        </button>
    );
};

export default IncrementItem;