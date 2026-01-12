import Hero from "./components/Hero"
import {useProductContext} from "./context/productContext"
import Services from "./components/Services"
import Products from "./components/Products"
import FeaturedProducts from "./components/FeaturedProducts"
import ProductsCarousel from "./components/ProductsCarousel"
const Home = () => {
   const value = useProductContext()
   return (
    <div>
      <Hero/>
      <Services/>
      <ProductsCarousel/>
      <FeaturedProducts/>
      <Products/>
    </div>
  )
}

export default Home