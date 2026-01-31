import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer"

const cartContext = createContext()

const getlocalCart = () =>{
    const localCartData = localStorage.getItem("cart")

    if(localCartData == [])
        return []
    else{
        return JSON.parse(localCartData)
    }
}


const initialState = {
    cart:getlocalCart(),
    total_items:0,
    total_amount:""
}

const CartProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,initialState)

    const addToCart = ({id,color,amount,size,product})=>{
        dispatch({type:"ADD_ITEM_CART",payload:{id,color,amount,size,product}})
    }

    const removeCartItem = (id) =>{
        dispatch({type:"REMOVE_ITEM_CART",payload:id})
    }

    const incrementQuantity = (id)=>{
        dispatch({type:"INCREMENT_QUANTITY",payload:id})
    }

    const decrementQuantity = (id) =>{
         dispatch({type:"DECREMENT_QUANTITY",payload:id})
    }

    const emptyCart = ()=>{
        dispatch({type:"EMPTY_CART"})
    }

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(state.cart));
        dispatch({type:"UPDATE_CART_SIZE"})
    },[state.cart])


    return <cartContext.Provider value={{...state,addToCart,removeCartItem,incrementQuantity,decrementQuantity,emptyCart}}>{children}</cartContext.Provider>
}

const useCartContext = ()=>{
    return useContext(cartContext)
}

export {CartProvider,useCartContext}