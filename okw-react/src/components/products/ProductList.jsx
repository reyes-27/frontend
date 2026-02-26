import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import endpoints from '../../endpoints';
import SimplePaginator from '../pagination/SimplePaginator';
const ProductList = ({ size, sendCountToParent, pageNumber }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPageCount, setTotalPageCount] = useState(0);

    const handlePageChange = (newPageNumber) => {
        setPage(newPageNumber);
    };

    const endpoint = pageNumber 
        ? `${endpoints['ecommerce']["product-list"]}?page=${pageNumber}` 
        : endpoints['ecommerce']["product-list"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(endpoint);
                setProducts(response.data.results.data);
                sendCountToParent(response.data.page_count);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchData();
    }, [endpoint, pageNumber]); 

    if (products && products.length > 0) {
        return (
<div className='flex flex-col gap-10'> {/* Added flex container */}
                {/* The Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product}/>
                    ))}
                </div>

                {/* Place Paginator HERE */}
                {/* <div className="flex justify-center border-t border-white/5 pt-8">
                    <SimplePaginator 
                        count={size} // Use the total page count from API
                        sendPageNumToParent={handlePageChange} 
                    />
                </div> */}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-2xl font-semibold text-gray-400">No hay productos disponibles</h2>
        </div>
    );
};

export default ProductList;