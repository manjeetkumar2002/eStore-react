import React from 'react'

const Footer = () => {
  return (
    <div id="footer">
  <div className="container-lg">
    <div className="row row-cols-lg-5 row-cols-sm-2 row-cols-1 py-5">
      <div className="col fs-6 text-secondary">
        <h2 className="fs-4 text-body">eStore</h2>
        <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula, facilisis magna ut, consectetur lorem.</p>
        <p><i className="bi bi-geo-alt text-primary mr-1"></i>    123 Fashion Street, New York, NY 10001</p>
        <p><i className="bi bi-telephone text-primary mr-1"></i>    +1 (555) 123-4567</p>
        <p><i className="bi bi-envelope text-primary mr-1"></i>    hello@example.com</p>
      </div>
      <div className="col fs-6 text-secondary">
        <h2 className="fs-5 text-body">Shop</h2>
        <p>New Arrivals</p>
        <p>Bestsellers</p>
        <p>Women's Clothing</p>
        <p>Men's Clothing</p>
        <p>Accessories</p>
        <p>Sale</p>
      </div>
      <div className="col fs-6 text-secondary">
        <h2 className="fs-5 text-body">Supports</h2>
        <p>Help Center</p>
        <p>Order Status</p>
        <p>Shipping</p>
        <p>Returns & Exchanges</p>
        <p>Size Guide</p>
        <p>Contact Us</p>
      </div>
      <div className="col fs-6 text-secondary">
        <h2 className="fs-5 text-body">Company</h2>
        <p>About Us</p>
        <p>Carrers</p>
        <p>Press</p>
        <p>Affiliates</p>
        <p>Responsibility</p>
        <p>Investors</p>
      </div>
      <div className="col fs-6 text-body d-flex gap-2 flex-column">
        <h2 className="fs-5 text-body">Download Our App</h2>
        <p>Shop on the go with our mobile app</p>
        <div className="d-flex gap-1">
          <div className="d-flex gap-1 bg-light rounded-3 p-2 align-items-center">
            <i className="bi bi-apple"></i>
            <p className="fw-semibold mb-0">App Store</p>
          </div>
          <div className="d-flex gap-2 bg-light rounded-3 p-2 align-items-center">
            <i className="bi bi-google-play"></i>
            <p className="fw-semibold mb-0">Google Play</p>
          </div>
        </div>
        <h6 className="text-secondary mt-2">Follow Us</h6>
        <div className="d-flex gap-2">
          <i className="bi bi-facebook bg-light p-2 fs-6 rounded-circle"></i>
          <i className="bi bi-instagram bg-light p-2 fs-6 rounded-circle"></i>
          <i className="bi bi-twitter-x bg-light p-2 fs-6 rounded-circle"></i>
          <i className="bi bi-tiktok bg-light p-2 fs-6 rounded-circle"></i>
          <i className="bi bi-pinterest bg-light p-2 fs-6 rounded-circle"></i>
          <i className="bi bi-youtube bg-light p-2 fs-6 rounded-circle"></i>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer