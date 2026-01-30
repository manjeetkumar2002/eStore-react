import React from 'react'
import { NavLink } from 'react-router'
import Star from '../Helper/Star'
import { useFilterContext } from '../context/filterContext'

const ProductCard = ({product}) => {
    const {name,description,image,price,id,rating} = product
  return (
    <div className="col">
        <div className={ `w-100 card mt-3 `}>
          <img src={image} className="card-img-top"  alt="Product" style={{height:"250px",objectFit:"cover"}}/>
          <div className="card-body">
            <NavLink 
                to={`/singleProduct/${id}`} 
                className="card-text text-decoration-none text-dark"
              >
            <h5 className="card-title text-truncate">{name}</h5>
             </NavLink>
             <div className="text-truncate mb-2">
              
                {description}
             
            </div>
            <h6 className="card-text fw-bold">${price}</h6>
            <Star stars={rating} />
          </div>
        </div>
    </div>
  )
}

export default ProductCard