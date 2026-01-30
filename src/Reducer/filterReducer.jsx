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

        case "SEARCH_PRODUCT":{
            const {all_products} = state
            const searchValue = action.payload
            const filterData = all_products.filter((currEle)=> currEle.name.toLowerCase().includes(searchValue.toLowerCase()))
            return {
                ...state,
                filter_products:filterData
            }
        }


        case "UPDATE_FILTER_VALUE":{
            const {name,value}=action.payload
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value
                }
            }
        }

        case "FILTER_PRODUCTS":{
            const {category,company,colors} = state.filters
            const {all_products} = state
            let tempFilterProducts = [...all_products]

            if(category!="All"){
                tempFilterProducts = tempFilterProducts.filter((currEle)=>{
                    return currEle.category === category
                })
            }
            if(company!="All"){
                tempFilterProducts = tempFilterProducts.filter((currEle)=>{
                    return currEle.brand === company
                })
            }
            if(colors!="All"){
                console.log("color value:",colors)
                tempFilterProducts = tempFilterProducts.filter((currEle)=>{
                    return currEle.colors.some((color)=>color.code===colors)
                })
            }
            return {
                ...state,
                filter_products:tempFilterProducts
            }
        }
        default : 
            return state
    }
}

export default filterReducer