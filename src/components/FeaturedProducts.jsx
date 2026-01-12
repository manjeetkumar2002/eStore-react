import React from 'react'

const FeaturedProducts = () => {
  return (
<div id="featured-products-section">
    <div className="container-lg">
        <div className="row my-5">
            <div className="col-12 text-center">
                <h2>Best Sellers</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="col-12">
                <div className="row mt-5 row-cols-lg-4 row-cols-sm-2 row-cols-1">
                    <div className="col">
                        <div className="w-100 card position-relative bg-light border-0" style={{ width: '18rem' }}>
                            <img className="img-fluid card-img-top" src="./images/product-1.webp" alt="" />
                            <div className="icons position-absolute d-flex flex-column gap-3" style={{ top: '8px', right: '8px' }}>
                                <i className="bi bi-heart px-2 py-1 rounded-circle bg-white shadow"></i>
                                <i className="bi bi-eye px-2 py-1 rounded-circle bg-white shadow"></i>
                            </div>
                            <div className="card-body p-3 bg-white">
                                <h4 className="card-title fs-6">Lorem ipsum dolor sit amet.</h4>
                                <p className="card-text mt-3 mb-0 fw-bold fs-5">$59.9</p>
                                <p className="text-warning">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star"></i>
                                </p>
                                <button className="btn text-white w-100" style={{ backgroundColor: '#0a4db8' }}>
                                    <i className="bi bi-bag-plus"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="w-100 card position-relative bg-light border-0" style={{ width: '18rem' }}>
                            <img className="img-fluid card-img-top" src="./images/product-4.webp" alt="" />
                            <div className="icons position-absolute d-flex flex-column gap-3" style={{ top: '8px', right: '8px' }}>
                                <i className="bi bi-heart px-2 py-1 rounded-circle bg-white shadow"></i>
                                <i className="bi bi-eye px-2 py-1 rounded-circle bg-white shadow"></i>
                            </div>
                            <div className="card-body p-3 bg-white">
                                <h4 className="card-title fs-6">Lorem ipsum dolor sit amet.</h4>
                                <p className="card-text mt-3 mb-0 fw-bold fs-5">$549.9</p>
                                <p className="text-warning">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star"></i>
                                </p>
                                <button className="btn text-white w-100" style={{ backgroundColor: '#0a4db8' }}>
                                    <i className="bi bi-bag-plus"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="w-100 card position-relative bg-light border-0" style={{ width: '18rem' }}>
                            <img className="img-fluid card-img-top" src="./images/product-7.webp" alt="" />
                            <div className="icons position-absolute d-flex flex-column gap-3" style={{ top: '8px', right: '8px' }}>
                                <i className="bi bi-heart px-2 py-1 rounded-circle bg-white shadow"></i>
                                <i className="bi bi-eye px-2 py-1 rounded-circle bg-white shadow"></i>
                            </div>
                            <div className="card-body p-3 bg-white">
                                <h4 className="card-title fs-6">Lorem ipsum dolor sit amet.</h4>
                                <p className="card-text mt-3 mb-0 fw-bold fs-5">$439.9</p>
                                <p className="text-warning">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </p>
                                <button className="btn text-white w-100" style={{ backgroundColor: '#0a4db8' }}>
                                    <i className="bi bi-bag-plus"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="w-100 card position-relative bg-light border-0" style={{ width: '18rem' }}>
                            <img className="img-fluid card-img-top" src="./images/product-12.webp" alt="" />
                            <div className="icons position-absolute d-flex flex-column gap-3" style={{ top: '8px', right: '8px' }}>
                                <i className="bi bi-heart px-2 py-1 rounded-circle bg-white shadow"></i>
                                <i className="bi bi-eye px-2 py-1 rounded-circle bg-white shadow"></i>
                            </div>
                            <div className="card-body p-3 bg-white">
                                <h4 className="card-title fs-6">Lorem ipsum dolor sit amet.</h4>
                                <p className="card-text mt-3 mb-0 fw-bold fs-5">$129.9</p>
                                <p className="text-warning">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star"></i>
                                </p>
                                <button className="btn w-100 bg-light text-secondary">
                                    <i className="bi bi-bag-plus"></i> Sold Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default FeaturedProducts