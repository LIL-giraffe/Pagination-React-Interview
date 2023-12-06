import React, { useEffect, useState } from "react";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const handleFetch = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    setProduct(json.products);
  };
  useEffect(() => {
    handleFetch();
  }, []);
  const pageSelector=(selectedPage)=>{
    setPage(selectedPage)
  }
  

  return (
    <div className="card">
      {product.slice(page * 4 - 4, page * 4).map((prod) => (
        <div className="product">
          <img src={prod.thumbnail} alt={prod.title} />
          <h1>{prod.title}</h1>
        </div>
      ))}
      {product.length > 0 && (
        <div className="page">
           <span onClick={()=>pageSelector(page-1)}>⏪</span>
            {[...Array(product.length / 10)].map((_, i) => {
              return <span onClick={()=>pageSelector(i+1)}>{i + 1}</span>;
            })}
          <span onClick={()=>pageSelector(page+1)}>⏩</span>  
        </div>
      )}
    </div>
  );
};

export default Product;
