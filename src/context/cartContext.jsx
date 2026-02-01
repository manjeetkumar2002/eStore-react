import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

const cartContext = createContext();

const getlocalCart = () => {
  try {
    const localCartData = localStorage.getItem("cart");
    
    // If no data exists in localStorage, return empty array
    if (!localCartData) {
      return [];
    }
    
    const parsedData = JSON.parse(localCartData);
    
    // Ensure parsedData is an array
    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error("Error parsing cart data from localStorage:", error);
    return [];
  }
};

const initialState = {
  cart: getlocalCart(),
  total_items: 0,
  total_amount:0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = ({ id, color, amount, size, product }) => {
    dispatch({
      type: "ADD_ITEM_CART",
      payload: { id, color, amount, size, product },
    });
  };

  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_ITEM_CART", payload: id });
  };

  const incrementQuantity = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: "UPDATE_CART_SIZE" });
    dispatch({ type: "UPDATE_CART_TOTAL_AMOUNT" });
  }, [state.cart]);

  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeCartItem,
        incrementQuantity,
        decrementQuantity,
        emptyCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider, useCartContext };
