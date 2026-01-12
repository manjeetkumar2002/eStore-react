import React from 'react'

const Hero = () => {
  return (
    <div id="hero-section">
  <div className="container-lg">
    <div className="row my-5">
      <div className="col-md-6 text-md-start text-center">
        <div className="px-3 py-2 fs-6 fw-semibold rounded-5 d-inline-block" style={{color: "#0a4db8", backgroundColor: "#ebf2fa"}}>New Collection 2025</div>
        <h1 id="hero-heading">
          Discover Stylish <span>Fashion</span> For Every Season
        </h1>
        <p className="fs-6 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Vestibulum ante ipsum primis in faucibus.</p>
        <div className="fw-semibold d-flex flex-sm-row flex-column gap-3 justify-content-md-start justify-content-center">
          <button className="btn py-2 text-white" style={{backgroundColor: "#0a4db8"}}>Shop Now <i className="bi bi-arrow-right-short"></i></button>
          <button className="btn py-2 btn-outline-secondary">View Collection</button>
        </div>
        <div className="d-flex flex-sm-row flex-column mt-5 gap-3 fs-6">
          <div>
            <i className="bi bi-truck" style={{color: "#0a4db8"}}></i>
            <span className="fw-semibold ms-2">Free Shipping</span>
          </div>
          <div>
            <i className="bi bi-shield-check" style={{color: "#0a4db8"}}></i>
            <span className="fw-semibold ms-2">Secure Payment</span>
          </div>
          <div>
            <i className="bi bi-arrow-repeat" style={{color: "#0a4db8"}}></i>
            <span className="fw-semibold ms-2">Easy Returns</span>
          </div>
        </div>
      </div>
      <div className="col-md-6 position-relative">
        <img height="600px" className="img-fluid mt-md-0 mt-5" src="../images/hero-image.webp" alt="Hero" />
        <div className="d-inline-flex rounded-4 align-items-center gap-3 px-2 py-1 py-sm-2 px-sm-2" style={{
          position: "absolute", 
          top: "20%", 
          left: "0px", 
          backgroundColor: "white", 
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
        }}>
          <img height="50" src="../images/hero-floating-img1.webp" alt="Summer Collection" />
          <div>
            <h6>Summer Collection</h6>
            <p style={{color: "#0a4db8", fontWeight: "700"}}>$89.99</p>
          </div>
        </div> 
        <div className="d-inline-flex rounded-4 align-items-center gap-3 px-2 py-1 py-sm-2 px-sm-2" style={{
          position: "absolute", 
          bottom: "20%", 
          right: "7%", 
          backgroundColor: "white", 
          boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
        }}>
          <img height="50" src="../images/hero-floating-img2.webp" alt="Casual Wear" />
          <div>
            <h6>Casual Wear</h6>
            <p style={{color: "#0a4db8", fontWeight: "700"}}>$59.99</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero