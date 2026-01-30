const cartReducer = (state,action) =>{
    switch(action.type){
        case "ADD_ITEM_CART":{
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
        }
        case "UPDATE_CART_SIZE":{
            return{
                ...state,
                total_items:state.cart.length
            }
        }
    }
}

export default cartReducer