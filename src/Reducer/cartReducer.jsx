const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_CART": {
      let cartItem;
      const { id, amount, color, size, product,discount } = action.payload;
      cartItem = {
        id: id + color.code,
        amount,
        color,
        size,
        discount:product.discount,
        name: product.name,
        image: product.images[0],
        price: product.price,
        max: product.stock,
      };
      // check if already exist
      let flag = false;
      for (let item of state.cart) {
        if (item.id === cartItem.id) {
          flag = true;
          break;
        }
      }
      if (flag) {
        return state;
      }

      // console.log("Add to cart", cartItem);
      return {
        ...state,
        cart: [...state.cart, cartItem],
      };
    }
    case "REMOVE_ITEM_CART": {
      const id = action.payload;
      // filter those element that doest match to this id
      const updatedCart = state.cart.filter((currEle) => {
        return currEle.id !== id;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "EMPTY_CART": {
      return {
        ...state,
        cart: [],
      };
    }
    case "INCREMENT_QUANTITY": {
      const id = action.payload;
      const updatedCart = state.cart.map((curElem) => {
        // console.log(curElem.id,id)
        if (curElem.id === id) {
          let incAmount = curElem.amount + 1;
          if (incAmount >= curElem.max) {
            incAmount = curElem.max;
          }

          return { ...curElem, amount: incAmount };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "DECREMENT_QUANTITY": {
      const id = action.payload;
      const updatedCart = state.cart.map((curElem) => {
        // console.log(curElem.id,id)
        if (curElem.id === id) {
          let decAmount = curElem.amount - 1;
          if (decAmount <= 0) {
            decAmount = 1;
          }

          return { ...curElem, amount: decAmount };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "UPDATE_CART_SIZE": {
      return {
        ...state,
        total_items: state.cart?.length,
      };
    }
    case "UPDATE_CART_TOTAL_AMOUNT":{
        let res = 0;
        for(let item of state.cart){
            const {price,discount,amount} = item
            let discountPrice = price - (price * discount/100)
            res += (discountPrice * amount)
        }
        return {
          ...state,
          total_amount:res
        }
    }
  }
};

export default cartReducer;
