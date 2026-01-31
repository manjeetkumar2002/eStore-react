import React from 'react'
import { NavLink } from 'react-router'
import Star from '../Helper/Star'
import { useFilterContext } from '../context/filterContext'
import { useTheme } from '../context/themeContext'

const ProductCard = ({product}) => {
    const {name,description,image,price,id,rating} = product
    const theme = useTheme()
  return (
    <div className="col">
        <div className={ `w-100 card position-relative  mt-3 `}>
          <img src={image} className="card-img-top"  alt="Product" style={{height:"250px",objectFit:"cover"}}/>
          <div id="popup-btns" className='z-5 position-absolute px-2' style={{top:"40%", left:0, right:0}}>
           <button  style={{ backgroundColor:product.stock>0? theme.primary:"",color:product.stock>0? theme.background:"" }} className={`btn ${product.stock==0?"text-secondary bg-light":""} rounded-5  w-100`}>
              <i className="bi bi-bag-plus"></i>
              {product.stock>0?" Add to Cart":" Sold Out"}               
            </button>
            <div className="icons position-absolute d-flex justify-content-center w-100 gap-3 mt-2">
              <i className="bi d-block bi-heart px-2 py-1 rounded-circle shadow"></i>
              <NavLink to={`/singleProduct/${id}`}>
              <i className="bi d-block bi-eye px-2 py-1 rounded-circle   shadow"></i>
              </NavLink>
              <i className="bi d-block bi-arrow-left-right px-2 py-1 rounded-circle   shadow"></i>
            </div>
          </div>
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