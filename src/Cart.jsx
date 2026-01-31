import { useCartContext } from "./context/cartContext";
import CartCard from "./components/cartCard";
import PageNavigation from "./components/PageNavigation";
const Cart = () => {
  const { cart, total_items, emptyCart } = useCartContext();
  return (
    <>
      <PageNavigation pageName="Cart" />
      <div className="container-lg my-5">
        <div className="row">
          <div
            className="col-md-8 shadow rounded-3 px-5 py-4"
            style={{ borderTop: "5px solid #0a4db899" }}
          >
            <div className="header">
              <div className="row p-2 border-bottom ">
                <div className="col-6">
                  <h4 className="fs-6 fw-normal">PRODUCT</h4>
                </div>
                <div className="col-6 d-flex gap-5 justify-content-between px-5">
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
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
