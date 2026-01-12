import Hero from "./components/Hero"
import {useProductContext} from "./context/productContext"
import Products from "./Products"
const Home = () => {
   const value = useProductContext()
   return (
    <div>
      <Hero/>
      <Products/>
    </div>
  )
}

export default Home