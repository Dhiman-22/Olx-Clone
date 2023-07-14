import { useEffect, useState } from "react"
import ProductItem from "./ProductItem";
function Post() {
    const [productData, setProductData] = useState([]);
    const fetchProductData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json();
            setProductData(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProductData()
    }, [])
    return <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap:"20px",
        padding:"60px",
    }}>
        {
            productData?.map((el)=>{
                return <ProductItem {...el} />
            })
        }
    </div>
}
export default Post