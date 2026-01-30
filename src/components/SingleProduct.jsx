import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/productContext";
import { useParams } from "react-router";
import PageNavigation from "./PageNavigation";
import ProductsCarousel from "./ProductsCarousel";
import Star from "../Helper/Star";
import { BiFontSize } from "react-icons/bi";
import MyImage from "./MyImage";
import { useCartContext } from "../context/cartContext";

const API = "http://localhost:3001";
const SingleProduct = () => {
  const { singleProduct, getSingleProduct, isLoading } = useProductContext();
  const {addToCart,cart} = useCartContext()
  const {
    name,
    description,
    price,
    category,
    image,
    images = [],
    rating,
    stock,
    colors = [],
    sizes = [],
  } = singleProduct;
  const [currColor, setCurrColor] = useState(colors[0] || "");
  const [currSize, setCurrSize] = useState(sizes[0] || "");
  const [currQuantity, setCurrQuantity] = useState(1);
  console.log(currColor,currQuantity,currSize)
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    getSingleProduct(API + `/products/${id}`);
  }, []);

  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  const decrementQuantity = () => {
    if (currQuantity > 1) setCurrQuantity(currQuantity - 1);
  };

  const incrementQuantity = () => {
    if (currQuantity < stock) setCurrQuantity(currQuantity + 1);
  };
  return (
    <>
      <PageNavigation pageName={"ProductDetails"} />
      <div className="container-lg">
        <div className="row my-5 ">
          <div className="col-md-6">
            <MyImage images={images} />
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-between">
              <p className="text-uppercase text-secondary fw-normal fs-6">
                {category}
              </p>
              <div className="d-flex">
                <Star /> (32)
              </div>
            </div>
            <h2 className="fs-2 fw-semibold">{name}</h2>
            <div className="d-flex gap-3 align-items-center">
              <p className="fs-4 fw-bold mb-0">${price}</p>
              <del className="text-secondary fs-5 fw-normal">
                ${price + 200}
              </del>
              <span
                className="bg-danger p-1 text-white rounded-2 my-4"
                style={{ fontSize: "12px" }}
              >
                -17%
              </span>
            </div>
            {/* description */}
            <p>{description}</p>
            {/* colors */}
            <div>
              <h5 className="fs-6">Color: </h5>
              <div className="d-flex align-items-start ">
                {colors?.map((color, index) => {
                  return (
                    <div key={index} className="d-flex flex-column">
                      <button
                        onClick={() => setCurrColor(color)}
                        key={`color-${index}-${color.code}`}
                        style={{
                          marginRight: "10px",
                          backgroundColor: color.code,
                          width: "30px",
                          height: "30px",
                        }}
                        className="border-1 rounded-circle"
                      >
                        {currColor.code == color.code ? (
                          <i className="bi bi-check"></i>
                        ) : (
                          ""
                        )}
                      </button>
                      <span
                        className={
                          currColor.code == color.code ? "d-inline-block" : "d-none"
                        }
                        style={{ fontSize: "14px" }}
                      >
                        {currColor.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* sizes */}
            {sizes && sizes.length > 0 && (
              <div className="mt-2">
                <h5 className="fs-6">Sizes: </h5>
                <div className="d-flex align-items-center ">
                  {sizes?.map((size, index) => {
                    return (
                      <button
                        onClick={() => setCurrSize(size)}
                        key={`size-${index}-${size}`}
                        style={{
                          marginRight: "10px",
                          backgroundColor: size == currSize ? "#0a4db8" : "",
                          color: size == currSize ? "white" : "",
                          width: "30px",
                          height: "30px",
                        }}
                        className="border-1 rounded-1"
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-4">
              <h5 className="fs-6 mb-3">Quantity:</h5>
              <div className="d-inline-flex overflow-hidden  rounded-2 border-secondary">
                <button
                  className="p-2 bg-light border border-secondary rounded-start"
                  onClick={decrementQuantity}
                  style={{
                    width: "40px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>

                <div
                  className="p-2 px-4 border-top border-bottom border-secondary  d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                  }}
                >
                  {currQuantity}
                </div>

                <button
                  className="p-2 bg-light border border-secondary rounded-end"
                  onClick={incrementQuantity}
                  style={{
                    width: "40px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>
            {/* buttons */}
            <div
              className="row mt-3 d-flex flex-sm-row flex-column gap-sm-0 gap-3  py-3"
              style={{ borderBottom: "1px solid #E5E4E2" }}
            >
              <div className="col-sm-5">
                <button
                  onClick={()=>addToCart({id,quantity:currQuantity,color:currColor,size:currSize,image:image,price:price,name:name,stock:stock})}
                  style={{ backgroundColor: "#0a4db8", color: "white" }}
                  className=" btn w-100"
                >
                  {" "}
                  <i className="bi bi-bag-plus"></i> Add to Cart{" "}
                </button>
              </div>
              <div className="col-sm-5">
                <button
                  className=" btn w-100 "
                  style={{ border: "1px solid #0a4db8", color: "#0a4db8" }}
                >
                  {" "}
                  <i className="bi bi-lightning-charge-fill"></i> Buy Now{" "}
                </button>
              </div>
              <div className="col-sm-2  pe-0">
                <button className="btn btn-outline-danger">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
            </div>

            {/* features */}
            <div className="d-flex flex flex-column mt-5 gap-3 fs-6">
              <div>
                <i className="bi bi-truck" style={{ color: "#0a4db8" }}></i>
                <span className=" ms-2">Free shipping on orders over $50</span>
              </div>

              <div>
                <i
                  className="bi bi-arrow-repeat"
                  style={{ color: "#0a4db8" }}
                ></i>
                <span className=" ms-2">30-day return policy</span>
              </div>
              <div>
                <i
                  className="bi bi-shield-check"
                  style={{ color: "#0a4db8" }}
                ></i>
                <span className=" ms-2">2-year warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
