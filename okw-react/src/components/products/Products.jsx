import { useState } from "react";
import {useSearchParams} from 'react-router-dom'
import ProductList from "./ProductList";
import SimplePaginator from "../pagination/SimplePaginator";
const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams(); // Added setSearchParams
    const pageNumber = searchParams.get('page') || 1; // Default to 1

    const [myCount, setMyCount] = useState(0);

    const sendPageNumToParent = (end) => {
        setSearchParams({ page: end }); 
    };

    const sendCountToParent = (count) => {
        setMyCount(count);
    };
    
    return (
        <div className="products-container px-4 md:px-10 pb-20">
            <ProductList 
                sendCountToParent={sendCountToParent} 
                pageNumber={pageNumber} 
            />
            
            <div className="mt-12 flex justify-center">
                <SimplePaginator 
                    count={myCount} 
                    sendPageNumToParent={sendPageNumToParent}
                    currentPage={parseInt(pageNumber)} 
                />
            </div>
        </div>
    );
}
export default Products;