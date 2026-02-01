import { useEffect, useState } from "react";
import { useProductContext } from "../context/productContext";
import { useParams } from "react-router";
import PageNavigation from "./PageNavigation";
import Star from "../Helper/Star";
import MyImage from "./MyImage";
import { useCartContext } from "../context/cartContext";
import { useTheme } from "../context/themeContext";

const API = "https://api-node-ecom-r9am.onrender.com/api";

const SingleProduct = () => {
  const { singleProduct, getSingleProduct, isLoading } = useProductContext();
  const { addToCart } = useCartContext();
  const {
    name,
    description,
    price,
    category,
    images = [],
    stock,
    colors = [],
    sizes = [],
    rating,
    discount
  } = singleProduct;
  const theme = useTheme()
  const [currColor, setCurrColor] = useState(colors[0] || "");
  const [currSize, setCurrSize] = useState(sizes[0] || "");
  const [currQuantity, setCurrQuantity] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    getSingleProduct(API + `/products/${id}`);
  }, []);

  useEffect(() => {
  if (singleProduct && singleProduct.colors && singleProduct.colors.length > 0) {
    setCurrColor(singleProduct.colors[0]);
  }
  if (singleProduct && singleProduct.sizes && singleProduct.sizes.length > 0) {
    setCurrSize(singleProduct.sizes[0]);
  }
}, [singleProduct]);


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
                 <Star stars={rating}/>
              </div>
            </div>
            <h2 className="fs-2 fw-semibold">{name}</h2>
            <div className="d-flex gap-3 align-items-center">
              <p className="fs-4 fw-bold mb-0">${(price - (price * (discount/100))).toFixed(2) }</p>
              <del className="text-secondary fs-5 fw-normal">
                ${price}
              </del>
              {discount>0&& <span
                className="bg-danger p-1 text-white rounded-2 my-4"
                style={{ fontSize: "12px" }}
              >
                -{discount}%
              </span>}
             
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
                        {currColor?.code == color.code ? (
                          <i className="text-primary bi bi-check"></i>
                        ) : (
                          ""
                        )}
                      </button>
                      <span
                        className={
                          currColor?.code == color.code
                            ? "d-inline-block"
                            : "d-none"
                        }
                        style={{ fontSize: "14px" }}
                      >
                        {currColor?.name}
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
                          backgroundColor: size == currSize ? theme.primary : "",
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
              style={{ borderBottom: `1px solid ${theme.border}` }}
            >
              <div className="col-sm-5">
               {
                singleProduct.stock>0?<button
                  onClick={() =>
                    addToCart({
                      id: id,
                      color: currColor,
                      amount: currQuantity,
                      size: currSize,
                      product: singleProduct,
                    })
                  }
                  style={{ backgroundColor: theme.primary, color: "white" }}
                  className=" btn w-100"
                >
                  {" "}
                  <i className="bi bi-bag-plus"></i> Add to Cart{" "}
                </button>: <button   style={{ backgroundColor:singleProduct.stock>0?  theme.primary:"",color:singleProduct.stock>0? 'white':"" }} className={`btn ${singleProduct.stock==0?"text-secondary bg-light border ":""}  w-100`}>
                                    <i className="bi bi-bag-plus"></i>
                                    {singleProduct.stock>0?" Add to Cart":" Sold Out"}
                  </button>

               } 
                 
              </div>
              {
                singleProduct.stock>0&& <div className="col-sm-5">
                
                <button
                  className=" btn w-100 "
                  style={{ border: `1px solid ${ theme.primary}`, color: theme.primary }}
                >
                  {" "}
                  <i className="bi bi-lightning-charge-fill"></i> Buy Now{" "}
                </button>
              </div>
              }
              <div className="col-sm-2  pe-0">
                <button className="btn btn-outline-danger">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
            </div>

            {/* features */}
            <div className="d-flex flex flex-column mt-5 gap-3 fs-6">
              <div>
                <i className="bi bi-truck" style={{ color: theme.primary }}></i>
                <span className=" ms-2">Free shipping on orders over $50</span>
              </div>

              <div>
                <i
                  className="bi bi-arrow-repeat"
                  style={{ color: theme.primary}}
                ></i>
                <span className=" ms-2">30-day return policy</span>
              </div>
              <div>
                <i
                  className="bi bi-shield-check"
                  style={{ color: theme.primary}}
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
