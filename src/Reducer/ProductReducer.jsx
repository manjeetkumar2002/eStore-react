import SingleProduct from "../components/SingleProduct"

const ProductReducer = (state,action) => {
    switch(action.type){
        case "SET_LOADING":{
            return {
                ...state,
                isLoading:true,
                isError:true
            }
        }
        case "SET_API_DATA":
           const filteredData = action.payload.filter((product)=>product.featured)
            return {
                ...state,
                isLoading:false,
                isError:false,
                featuredProducts: filteredData,
                products:action.payload
            }   
            
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isLoading:false,
                isError:false,
                singleProduct:action.payload
            }
        case "SET_CATEGORIES":
            return {
                ...state,
                categories:action.payload
            }

        case "SET_TESTINOMIALS":
            return {
                ...state,
                testinomials:action.payload
            }
        default:
            return state
    }
}

export default ProductReducer