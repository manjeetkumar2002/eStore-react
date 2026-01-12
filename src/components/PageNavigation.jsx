import React from 'react'
import { NavLink } from 'react-router'

const PageNavigation = ({pageName}) => {
  return (
    <div id='page-navigation' style={{backgroundColor: "#ebf2fa"}}>
        <div className="container-lg">
            <div className="row justify-content-between align-items-center py-3">
                <div className="col-auto">
                    <h3 className="mb-0">{pageName}</h3> 
                </div>
                <div className="col-auto">
                    <NavLink to="/" className="text-decoration-none" style={{color:"#0a4db8"}}>Home</NavLink> /    
                    <span className="ms-1">{pageName}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageNavigation