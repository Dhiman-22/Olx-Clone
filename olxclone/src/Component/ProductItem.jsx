import {Link} from "react-router-dom"
function ProductItem({price,image,category,id}){
    return (
       <Link to={`/products/${id}`}> <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "30px",
            flexDirection: "column",
            borderRadius:"4%"
          }}
        >
          <img  width="auto" src={image} alt={category}/>
          <h1 style={{color:"green"}} >Rs: {price}</h1>
          <h2 >{category}</h2>
        </div>
        </Link>
      );
}
export default ProductItem;