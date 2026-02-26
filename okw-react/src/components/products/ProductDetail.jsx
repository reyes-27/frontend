import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import endpoints from "../../endpoints";
import axios from "axios";


const ProductDetail = () => {
    const [product, setProduct] = useState('')
    const {slug} = useParams('slug')
    const endpoint = endpoints['ecommerce']['product-detail'] + slug + '/'
    useEffect(() =>{
        const fetchData = async() => {
            try {
                const response = await axios.get(endpoint)
                setProduct(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
    fetchData()
    }
    , [slug])

    return(
        <>
            chai
        </>
    )
}

export default ProductDetail;