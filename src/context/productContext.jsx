import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer"
const API = "http://localhost:3001/products"
const AppContext = createContext()

const initalState = {
    products:[]
}

const AppProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initalState)
    const getProducts = async (url) =>{
        const response = await axios.get(url)
        const products = await response.data
        dispatch({type:"SET_API_DATA",payload:products})
    }

    useEffect(()=>{
        getProducts(API)
    },[])
    return <AppContext.Provider value = {{...state}}>{children}</AppContext.Provider>
}

const useProductContext = () =>{
    return useContext(AppContext)
}

export {AppProvider,useProductContext}