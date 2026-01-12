import { BrowserRouter as Router ,Routes,Route } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Newletter from './components/Newletter'
import Category from './Category'
import SingleProduct from './components/SingleProduct'
function App() {
  return (
    <>
     <Router>
      <Header/>
        <main>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/category' element={<Category/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/singleProduct/:id' element={<SingleProduct/>}></Route>
        </Routes>
        </main>
        <Newletter/>
        <Footer/>
      </Router>
    </>
  )
}
export default App
