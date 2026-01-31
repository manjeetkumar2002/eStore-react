import React from 'react'
import { useTheme } from '../context/themeContext'

const ProductsCarousel = () => {
    const theme = useTheme()
   
  return (
    <div id="products-carousel-section">
    <div className="container-lg">
        <div className="row position-relative py-5 gap-4 overflow-hidden flex-nowrap">
            <div className="col text-center rounded-4" style={{ backgroundColor: theme.background }}>
                <img height="160px" src="./images/product-5.webp" alt="" />
                <h5 style={{ color:  theme.primary }} className="fs-6 mt-1">Aenean tellus</h5>
                <p className="text-dark fs-6">8 Products</p>
            </div>
            <div className="col text-center rounded-4" style={{ backgroundColor: theme.background }}>
                <img height="160px" src="./images/product2.png" alt="" />
                <h5 style={{ color:  theme.primary }} className="fs-6 mt-1">Aenean tellus</h5>
                <p className="text-dark fs-6">8 Products</p>
            </div>
            <div className="col text-center rounded-4" style={{ backgroundColor: theme.background }}>
                <img height="160px" src="./images/product3.webp" alt="" />
                <h5 style={{ color:  theme.primary }} className="fs-6 mt-1">Aenean tellus</h5>
                <p className="text-dark fs-6">8 Products</p>
            </div>
            <div className="col text-center rounded-4" style={{ backgroundColor: theme.background }}>
                <img height="160px" src="./images/product-1.webp" alt="" />
                <h5 style={{ color:  theme.primary }} className="fs-6 mt-1">Aenean tellus</h5>
                <p className="text-dark fs-6">8 Products</p>
            </div>
            <div className="col text-center rounded-4" style={{ backgroundColor: theme.background }}>
                <img height="160px" src="./images/product-8.webp" alt="" />
                <h5 style={{ color:  theme.primary }} className="fs-6 mt-1">Aenean tellus</h5>
                <p className="text-dark fs-6">8 Products</p>
            </div>
            <div className="position-absolute px-0 w-100" style={{ zIndex: 100, top: '40%' }}>
                <i className="bi bi-chevron-left border-0 fs-3 fw-semibold rounded-circle px-2 py-1 shadow-sm bg-white" style={{ color: '#0a4db8' }}></i>
                <i className="bi bi-chevron-right border-0 fs-3 fw-semibold rounded-circle px-2 py-1 shadow-sm bg-white float-end" style={{ color: '#0a4db8' }}></i>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductsCarousel