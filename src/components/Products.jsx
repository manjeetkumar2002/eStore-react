import ProductCard from "./ProductCard"
import { useProductContext } from "../context/productContext"
import { NavLink } from "react-router"
import { useEffect, useState } from "react"

const Products = () => {
  const {products,categories,isLoading} = useProductContext()
  const [activeCategory,setActiveCategory] = useState(categories[0]?.name||"All")
  console.log("products : ",products)

  if (isLoading){
    return (
      <h3>
        Loading....
      </h3>
    )
  }
  return (
    <div>
        <div id="product-filtration">
  <div className="container-lg my-5">
    <div className="row">
      <div className="filter-buttons col-12 d-flex justify-content-center gap-1 gap-sm-3">
        {/* <button style={{backgroundColor: "#0a4db8"}} className="btn text-white rounded-5">All</button> */}
        {
          categories.map((category,index)=>{
            return (
               <button onClick={()=>setActiveCategory(category.name)} style={{backgroundColor:activeCategory==category.name?"#0a4db8":"", color:activeCategory==category.name?"white":""}} key={index} className={`btn btn-light rounded-5`}>{category.name}</button>
            )
          })
        }
      </div>
    </div>
    <div className="row my-5 row-cols-1 row-cols-sm-2 row-cols-lg-4">
      {
        products.map((product,index)=>(
              <ProductCard key={index} product={product}/>
        ))
      }
    </div>
    <div className="row">
      <div className="col justify-content-center d-flex"> 
        <button style={{backgroundColor: "#0a4db8"}} className="btn text-white rounded-5">View All Products <i className="bi bi-arrow-right-short"></i></button>
      </div>
    </div>
  </div>
        </div>
    </div>
  )
}

export default Products