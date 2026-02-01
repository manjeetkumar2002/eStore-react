import { useCartContext } from "./context/cartContext";
import CartCard from "./components/cartCard";
import PageNavigation from "./components/PageNavigation";
import { useTheme } from "./context/themeContext";
import { NavLink } from "react-router";
const Cart = () => {
  const { cart, total_items, emptyCart,total_amount } = useCartContext();
  const theme = useTheme()
  return (
    <>
      <PageNavigation pageName="Cart" />
      <div className="container-lg my-5">
        <div className="row gap-3 mx-1">
          <div
            className="col-lg-8 shadow rounded-3 px-sm-5 px-4 py-4 py-sm-4"
            style={{ borderTop: "5px solid #0a4db899" }}
          >
            <div className="header d-lg-block d-none">
              <div className="row p-2 border-bottom ">
                <div className="col-6">
                  <h4 className="fs-6 fw-normal">PRODUCT</h4>
                </div>
                <div className="col-6 d-flex gap-4 justify-content-between px-5">
                  <h4 className="fs-6 fw-normal">PRICE</h4>
                  <h4 className="fs-6 fw-normal">QUANTITY</h4>
                  <h4 className="fs-6 fw-normal">TOTAL</h4>
                </div>
              </div>
            </div>
            {total_items > 0 ? (
              <div className="cart-products mt-3">
                {cart.map((curElem, index) => {
                  return <CartCard key={index} data={curElem} />;
                })}
                <div className="d-flex mt-4 gap-3">
                  <button
                    onClick={() => emptyCart()}
                    className="btn rounded-5 btn-outline-danger"
                  >
                    <i className="bi bi-trash"></i> Clear
                  </button>
                </div>
              </div>
            ) : (
              <h2 className="text-danger mt-3 fs-5">Cart Is Empty!</h2>
            )}
          </div>
          <div className="col-lg-3 shadow p-2 px-4" style={{ borderTop: "5px solid #0a4db899" }}>
               <h4 className="fs-5 fw-normal mt-2">Order Summary</h4>
               <hr className="my-0" />
               <div className="d-flex justify-content-between mt-2">
                <span className="fs-6">Subtotal</span>
                <span className="fs-6">{total_amount.toFixed(2)}</span>
               </div>
               <div className="mt-5 d-flex flex-column gap-2">
                <button className="btn rounded-5" style={{width:"100%",backgroundColor: theme.primary,color:"white"}}> Proceed to Checkout <i className="bi bi-arrow-right-short"></i></button>
                <NavLink to="/category">
                <button className="btn rounded-5" style={{width:"100%",backgroundColor: theme.background,color:theme.primary}}><i className="bi bi-arrow-left-short"></i>  Continue Shopping</button>
                </NavLink>
               </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
