import ProductDetails from "../Route/productDetails"
import { useState,useEffect } from "react"
import { useParams } from "react-router"

function SingleProduct(){
    const {id}=useParams()
    
    const [url,setUrl]=useState([])
    const fetchProductData = async (id) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json();
            setUrl(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProductData(id)
    }, [id])

return <div>
    <ProductDetails {...url}/>
    </div>
}
export default SingleProduct