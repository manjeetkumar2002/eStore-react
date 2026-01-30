import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../Reducer/filterReducer"
import { useProductContext } from "./productContext"
const filterContext = createContext()

const initialState = {
    all_products:[],
    filter_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters:{
        text:"",
        category:"All",
        company:"All",
        colors:"All"
    }
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

    const searchProduct = (value)=>{
        dispatch({type:"SEARCH_PRODUCT",payload:value})
    }

    const updateFilterValue = (e) =>{
        const name = e.target.name
        const value = e.target.value
        console.log(name,value)
        dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})
    }

    const getUniqueValue = (products, attr) => {
    // console.log(products);
    let newVal = products.map((currEle) => {
      return currEle[attr];
    });

    if (attr === "colors") {
      newVal = newVal.flat();
      newVal = newVal.map((currEle) => currEle.code);
      // console.log("newVal",newVal)
    }
    return (newVal = ["All", ...new Set(newVal)]);
  };

    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"GET_SORT_PRODUCTS"})
    },[state.sorting_value,state.filters])

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
    },[products])
    return <filterContext.Provider value={{...state,setGridView,setListView,sorting,searchProduct,updateFilterValue,getUniqueValue}}>{children}</filterContext.Provider>
}

const useFilterContext = ()=>{
    return useContext(filterContext)
}

export {useFilterContext,FilterProvider}