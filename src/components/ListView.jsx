import React from 'react'
import ListViewProductCard from './ListViewProductCard';
const ListView = ({products}) => {
  return (
    <div className="row row-cols-1 p-2 mb-4">
        {products.map((curElem) => {
          return <ListViewProductCard key={curElem.id}  product={curElem} />;
        })}
      </div>
  )
}

export default ListView