import { NavLink } from "react-router"
import { useState } from "react"
const Header = () => {
    const [showMenu,setShowMenu] = useState(false)
    const [showSearchBar,setshowSearchBar] = useState(false)
    
    return (
    <div id="header-section">
        <div className="container-lg overflow-hidden">
                <div className="row py-4 align-items-center">
                        <div className="col-4 order-0">
                            <h2 className="fs-2 text-dark fw-semibold">eStore</h2>
                        </div>
                        <div className={`${showSearchBar?"order-4 order-lg-2 col-lg-4 py-3 d-block":"col-4 d-lg-block d-none"}`}>
                            <div className=" search-container rounded-5  p-1 position-relative overflow-hidden" style={{"boxShadow":"2px 2px 10px rgba(0,0,0,0.1)"}}>
                                <input id="search-bar" className="border-0 bg-transparent fs-6 shadow-none form-control" type="text" placeholder="Search for products"/>
                                <div style={{"backgroundColor": "#0a4db8"}} className="text-white d-flex justify-content-center align-items-center fs-5 m-1 px-4 py-0 rounded-5 position-absolute top-0 bottom-0 end-0">
                                    <i className="bi bi-search"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-8 fs-4 order-3">
                            <div className="icons float-end d-flex gap-3">
                                <i type="button" onClick={()=>{setshowSearchBar(!showSearchBar)}} className="bi bi-search d-block d-lg-none"></i>
                                <i className="bi bi-person"></i>
                                <div className="position-relative d-none d-sm-block ">
                                    <i className="bi bi-heart"></i>
                                    <span className="position-absolute h-50 d-flex justify-content-center align-items-center  p-1 rounded-circle text-white" style={{"fontSize":"13px", backgroundColor: "#0a4db8", top:"-10px", right:"-14px"}} >0</span>
                                </div>
                                <NavLink to="/cart" className="text-dark position-relative">
                                    <i className="bi bi-cart"></i>
                                    <span className="position-absolute h-50 d-flex justify-content-center align-items-center  p-1 rounded-circle text-white" style={{"fontSize":"13px", backgroundColor: "#0a4db8", top:"-10px", right:"-12px"}} >3</span>
                                </NavLink> 
                                <i onClick={()=>setShowMenu(!showMenu)} className="bi bi-list d-block d-lg-none"></i>
                            </div>
                        </div>
                </div>
                {/* nav */}
                <div style={{backgroundColor:showMenu?"rgba(0, 0, 0, 0.7)":""}} className={`${showMenu ?"position-absolute p-4 top-0  d-lg-none vh-100 start-0 end-0 z-100":"row border border-start-0 border-end-0 py-3 d-lg-block d-none"}`}>
                    <div className="d-flex d-lg-none justify-content-end mb-3 ">
                    <i onClick={()=>setShowMenu(!showMenu)} class="bi bi-x-lg fs-4 text-white fw-bold"></i>
                    </div>
                    <ul id="nav-menu" style={{minHeight:showMenu?"93%":"" }} className={`${showMenu?"d-flex d-lg-none  flex-column bg-white fs-6 gap-4 p-4 rounded-2 align-items-start":"list-unstyled d-flex fs-6 gap-3 mb-0 flex-wrap"}`}>
                        <NavLink to="/" className="text-decoration-none text-dark">Home</NavLink>
                        <NavLink to="/about" className="text-decoration-none text-dark">About</NavLink>
                        <NavLink to="/category" className="text-decoration-none text-dark">Category</NavLink>
                        <NavLink to="/productDetails" className="text-decoration-none text-dark">Product Details</NavLink>
                        <NavLink to="/cart" className="text-decoration-none text-dark">Cart</NavLink>
                        <NavLink to="/checkout" className="text-decoration-none text-dark">Checkout</NavLink>
                        <div className="dropdown">
                            <a className="dropdown-toggle text-decoration-none text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <NavLink to="/contact" className="text-decoration-none text-dark">Contact</NavLink>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Header