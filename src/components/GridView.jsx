import React from 'react'
import ProductCard from "../components/ProductCard"
const GridView = ({products}) => {
  return (
    <div className="row row-cols-sm-2 row-cols-1 p-2 mb-4">
        {products.map((curElem) => {
          return <ProductCard key={curElem.id}  product={curElem} />;
        })}
      </div>
  )
}

export default GridView