import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../Reducer/filterReducer"
import { useProductContext } from "./productContext"
const filterContext = createContext()

const initialState = {
    all_products:[],
    filter_products:[],
    grid_view:true
}
const FilterProvider = ({children}) =>{
    const {products} = useProductContext()
    const [state,dispatch] = useReducer(reducer,initialState)


    const setGridView = ()=>{
        return dispatch({type:"SET_GRID_VIEW"})
    }
    const setListView = ()=>{
        return dispatch({type:"SET_LIST_VIEW"})
    }


    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products.slice(0,4)})
    },[products])
    return <filterContext.Provider value={{...state,setGridView,setListView}}>{children}</filterContext.Provider>
}

const useFilterContext = ()=>{
    return useContext(filterContext)
}

export {useFilterContext,FilterProvider}