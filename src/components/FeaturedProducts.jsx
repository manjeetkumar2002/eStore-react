import React from 'react'
import { useProductContext } from '../context/productContext'
import Star from '../Helper/Star'
import { useTheme } from '../context/themeContext'
const FeaturedProducts = () => {
    const {featuredProducts} = useProductContext()
    const theme = useTheme()
  return (
<div id="featured-products-section">
    <div className="container-lg">
        <div className="row my-5">
            <div className="col-12 text-center">
                <h2>Best Sellers</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="col-12">
                <div className="row mt-5 row-cols-lg-4 row-cols-sm-2 row-cols-1">
                    {
                        featuredProducts.map((product,index)=>{
                            return (
                                <div key={index} className="col">
                        <div  className="featured-product w-100 card position-relative bg-light border-0" style={{ width: '18rem' }}>
                            <img style={{height:"200px"}} className="img-fluid card-img-top" src={product.image} alt="" />
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
                                    <button  style={{ backgroundColor:product.stock>0? theme.primary:"",color:product.stock>0? theme.background:"" }} className={`btn ${product.stock==0?"text-secondary bg-light":""}  w-100`}>
                                    <i className="bi bi-bag-plus"></i>
                                    {product.stock>0?" Add to Cart":" Sold Out"}
                                     
                                    </button>
                            
                               
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default FeaturedProducts