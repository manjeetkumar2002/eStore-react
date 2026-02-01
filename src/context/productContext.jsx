import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";
const API = "https://api-node-ecom-r9am.onrender.com/api";
const AppContext = createContext();

const initalState = {
  isLoading: false,
  isError: false,
  products: [],
  singleProduct: {},
  categories: [],
  featuredProducts: [],
  testinomials: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    const response = await axios.get(url);
    const products = await response.data.products;
    // console.log(products)
    dispatch({ type: "SET_API_DATA", payload: products });
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    const response = await axios.get(url);
    // console.log(response)
    const singleProduct = await response.data.product;
    dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
  };
  const getCategories = async (url) => {
    const response = await axios.get(url);
    const categories = await response.data;
    dispatch({ type: "SET_CATEGORIES", payload: categories });
  };
  const getTestinomials = async (url) => {
    const response = await axios.get(url);
    const testinomials = response.data;
    dispatch({ type: "SET_TESTINOMIALS", payload: testinomials });
  };

  useEffect(() => {
    getProducts(API + "/products");
    getCategories(API + "/categories");
  }, []);
  return (
    <AppContext.Provider
      value={{ ...state, getSingleProduct, getTestinomials }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };
