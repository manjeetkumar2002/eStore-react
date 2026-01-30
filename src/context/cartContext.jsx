import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer"

const cartContext = createContext()

const initialState = {
    cart:[],
    total_items:0,
    total_amount:""
}

const CartContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialState)

    const addToCart = ({id,quantity,color,size})=>{
        console.log(id,quantity,color,size)
        dispatch({type:"ADD_ITEM_CART",payload:{id,quantity,color,size}})
    }

    const removeCartItem = ({id}) =>{
        dispatch({type:"REMOVE_ITEM_CART",payload:id})
    }

    useEffect(()=>{
        dispatch({type:"UPDATE_CART_SIZE"})
    },[state.cart])

    return <cartContext.Provider value={{...state,addToCart,removeCartItem}}>{children}</cartContext.Provider>
}

const useCartContext = ()=>{
    return useContext(cartContext)
}

export {CartContextProvider,useCartContext}