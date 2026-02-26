import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import useCart from "./useCart"
const AddToCart = ({ product, quantity, className }) => {
    const { addItem } = useCart()
    
    const handleAddToCart = () => {
        addItem.mutate({ product_slug: product.slug, quantity: quantity })
    }

    return (
        <button 
        
            onClick={handleAddToCart}
            disabled={addItem.isLoading}
            className={className}
        >
            <ShoppingCartIcon className="size-5" />

            {addItem.isLoading ? 'Adding...' : 'Add to cart'}
        </button>
    )
}

export default AddToCart