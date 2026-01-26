const filterReducer = (state,action)=>{
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":{
            return{
                ...state,
                all_products:[...action.payload],
                filter_products:[...action.payload]
            }
        }
        case "SET_GRID_VIEW":{
            return {
                ...state,
                grid_view:true
            }
        }
        case "SET_LIST_VIEW":{
            return {
                ...state,
                grid_view:false
            }
        }
        case "SET_SORT_VALUE":{
            return {
                ...state,
                sorting_value:action.payload
            }
        }
        case "GET_SORT_PRODUCTS":{
            console.log("Inside GET_SORT_PRODUCTS ");
            
            let newSortProducts;
            const {filter_products,sorting_value} = state
            let tempSortProducts = [...filter_products]

            const sortProducts = (a,b) =>{
                if(sorting_value == "lowest"){
                    return a.price - b.price
                }
                if(sorting_value == "highest"){
                    return b.price - a.price
                }
                if(sorting_value == "a-z"){
                    return a.name.localeCompare(b.name)
                }
                if(sorting_value == "z-a"){
                    return b.name.localeCompare(a.name)
                }
            }

            newSortProducts = tempSortProducts.sort(sortProducts)
            return {
                ...state,
                filter_products:newSortProducts
            }
        }
        default : 
            return state
    }
}

export default filterReducer