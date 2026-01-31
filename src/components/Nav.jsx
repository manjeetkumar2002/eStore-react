import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
  return (
        <ul className='d-none d-sm-flex mb-0 list-unstyled gap-3' id="nav" >
            <li><NavLink className={"text-decoration-none  text-uppercase lh-lg"} to="/">Home</NavLink></li>
            <li><NavLink className={"text-decoration-none  text-uppercase lh-lg"} to="/about">About</NavLink></li>
            <li><NavLink className={"text-decoration-none  text-uppercase lh-lg"} to="/products">Products</NavLink></li>
            <li><NavLink className={"text-decoration-none  text-uppercase lh-lg"} to="/contact">Contact</NavLink></li>
        </ul>
  )
}

export default Nav