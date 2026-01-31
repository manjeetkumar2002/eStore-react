import ProductCard from "./ProductCard"
import { useProductContext } from "../context/productContext"
import { NavLink } from "react-router"
import { useEffect, useState } from "react"
import { useFilterContext } from "../context/filterContext"
import { useTheme } from "../context/themeContext"

const Products = () => {
  const {products,isLoading} = useProductContext()
  const {getUniqueValue,updateFilterValue,filter_products} = useFilterContext()
  const [activeCategory,setActiveCategory] = useState("All")
  const [categories,setCategories] = useState([])
  const theme = useTheme()
  // console.log("products : ",products)
  useEffect(()=>{
    let result = getUniqueValue(products,"category")
    setCategories([...result])
  },[products]) 
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
          categories?.map((category,index)=>{
            return (
               <button type="button" name="category" value={category} onClick={(e)=>{setActiveCategory(category),updateFilterValue(e)}} style={{backgroundColor:activeCategory==category?theme.primary:"", color:activeCategory==category?"white":""}} key={index} className={`btn btn-light rounded-5`}>{category}</button>
            )
          })
        }
      </div>
    </div>
    <div className="row my-5 row-cols-1 row-cols-sm-2 row-cols-lg-4">
      {
        filter_products.map((product,index)=>(
              <ProductCard key={index} product={product}/>
        ))
      }
    </div>
    <div className="row">
      <div className="col justify-content-center d-flex"> 
        <button type="button" name="category" value={"All"} onClick={(e)=>{setActiveCategory("All"),updateFilterValue(e)}} style={{backgroundColor: theme.primary}} className="btn text-white rounded-5">View All Products <i className="bi bi-arrow-right-short"></i></button>
      </div>
    </div>
  </div>
        </div>
    </div>
  )
}

export default Products