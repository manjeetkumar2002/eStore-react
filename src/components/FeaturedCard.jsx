import React, { useState,useEffect } from 'react'
import Star from '../Helper/Star'
import { useTheme } from '../context/themeContext'
import { NavLink } from 'react-router'
const FeaturedCard = ({product}) => {
    const [cardImg,setCardImg] = useState(product.image)
       useEffect(()=>{
          setCardImg(product.image)
        },[product.image])
    const theme = useTheme()
  return (
    <div onMouseOver={()=>setCardImg(product.images[1])} onMouseLeave={()=>setCardImg(product.images[0])}  className="featured-product w-100 card position-relative bg-light border-0" style={{ width: '18rem' }}>
                            <img style={{height:"200px"}} className="img-fluid card-img-top" src={cardImg} alt="" />
                            <div className="icons position-absolute d-flex flex-column gap-3" style={{ top: '8px', right: '8px' }}>
                                <i className="bi bi-heart px-2 py-1 rounded-circle shadow"></i>
                                <i className="bi bi-eye px-2 py-1 rounded-circle  shadow"></i>
                            </div>
                            <div className="card-body p-3 bg-white">
                                <h4 className="card-title fs-6">{product.name}</h4>
                                <p className="card-text mt-3 mb-0 fw-semibold fs-5">${product.price}</p>
                                    <div className="my-2">
                                    <Star stars={product.rating}/>
                                    </div>
                                    <NavLink to={`/singleProduct/${product.id}`}>
                                    <button  style={{ backgroundColor:product.stock>0? theme.primary:"",color:product.stock>0? theme.background:"" }} className={`btn ${product.stock==0?"text-secondary border bg-light":""}  w-100`}>
                                    <i className="bi bi-bag-plus"></i>
                                    {product.stock>0?" Add to Cart":" Sold Out"}
                                    </button></NavLink>
                            
                               
                            </div>
                        </div>
  )
}

export default FeaturedCard