import React from 'react'
import { useProductContext } from '../context/productContext'
import Star from '../Helper/Star'
import { useTheme } from '../context/themeContext'
import FeaturedCard from './FeaturedCard'
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
                                    <FeaturedCard product={product}/>
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