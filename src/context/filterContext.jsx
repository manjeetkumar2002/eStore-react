import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../Reducer/filterReducer"
import { useProductContext } from "./productContext"
const filterContext = createContext()

const initialState = {
    all_products:[],
    filter_products:[],
    grid_view:true,
    sorting_value:"lowest"
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

    const sorting = (e)=>{
        const userValue = e.target.value
        dispatch({type:"SET_SORT_VALUE",payload:userValue})
    }

    useEffect(()=>{
        dispatch({type:"GET_SORT_PRODUCTS"})
    },[state.sorting_value])

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products.slice(0,4)})
    },[products])
    return <filterContext.Provider value={{...state,setGridView,setListView,sorting}}>{children}</filterContext.Provider>
}

const useFilterContext = ()=>{
    return useContext(filterContext)
}

export {useFilterContext,FilterProvider}