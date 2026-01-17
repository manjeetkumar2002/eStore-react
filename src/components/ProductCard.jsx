import React from 'react'
import { NavLink } from 'react-router'
import Rating from '../Helper/Rating'

const ProductCard = ({product}) => {
    const {description,image,price,id} = product
  return (
    <div className="col">
        <div className="w-100 card mt-3">
          <img src={image} className="card-img-top"  alt="Product" style={{height:"250px",objectFit:"cover"}}/>
          <div className="card-body">
             <div className="text-truncate mb-2">
              <NavLink 
                to={`/singleProduct/${id}`} 
                className="card-text text-decoration-none text-dark"
              >
                {description}
              </NavLink>
            </div>
            <h6 className="card-text fw-bold">${price}</h6>
            <Rating/>
          </div>
        </div>
    </div>
  )
}

export default ProductCard