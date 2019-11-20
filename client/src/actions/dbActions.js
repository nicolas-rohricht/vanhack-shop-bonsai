//This .js file was created to simulate the API calls to retrieve and manage the data of the app

import Types from './actionsTypes';

//Manage the cart items
export const changeCartItems = (currentCartItems, item) => (dispatch) => {
  let tmpCurrentCartItems = [];
  let exists = false;

  for (let index = 0; index < item.length; index++) {
    const itemElement = item[index];
    
    exists = false;

    for (let index = 0; index < currentCartItems.length; index++) {
      const cartElement = currentCartItems[index];
      
      if (cartElement.id === itemElement.id) {
        exists = true;
      }
    }

    console.tron.log(`vai verificar o exists:  ${exists}`);
    if (!exists) {
      currentCartItems = currentCartItems.concat( itemElement );
    }
  }
  
  const finalList = currentCartItems.concat(tmpCurrentCartItems)
  dispatch({ type: Types.CHANGE_CART_ITEMS, payload: currentCartItems });
}

//Manage the liked items
export const changeLikedItems = (currentLikedItems, item) => (dispatch) => {
  const newItem = currentLikedItems.filter( element => element.id === item.id);
  
  //If is empty, means that this product was not added to the liked yet
  if ( newItem.length === 0) {
    const likedItems = currentLikedItems.concat(item);

    dispatch({ type: Types.CHANGE_LIKED_ITEMS, payload: likedItems });
  }
}

//Manage the selected items by the multi selector option on products list
export const changeSelectedItems = ( listOfProducts, item ) => (dispatch) => {
  listOfProducts.map(element => { 
    if ( item.id === element.id ) {
      element.selected = !element.selected
    };
  });

  dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: [] })
  dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: listOfProducts })
}

//Clear the selected products on products list
export const clearSelection = ( listOfProducts ) => (dispatch) => {
  listOfProducts.map(element => { 
    if ( element.selected ) {
      element.selected = false
    };
  });

  dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: [] })
  dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: listOfProducts })
}

//Manage the quantity of products to buy inside the cart page
export const manageProductCartQuantity = ( item, cartItems, option ) => (dispatch) => {
  cartItems.map(element => { 
    ((element.id === item.id) &&
    (element.quantity = option === 'increase' ? element.quantity + 1 : element.quantity - 1))
  });

  dispatch({ type: Types.CHANGE_CART_ITEMS, payload: [] });
  dispatch({ type: Types.CHANGE_CART_ITEMS, payload: cartItems });
}

//Remove the product from cart
export const removeCartItem = ( item, cartItems ) => (dispatch) => {
  const tmpCartItems = cartItems.filter(element => element.id !== item.id );

  dispatch({ type: Types.CHANGE_CART_ITEMS, payload: [] });
  dispatch({ type: Types.CHANGE_CART_ITEMS, payload: tmpCartItems });
}

//Remove the product from the liked list
export const removeLikedItem = ( item, likedItems ) => (dispatch) => {
  const tmpLikedItems = likedItems.filter(element => element.id !== item.id );

  dispatch({ type: Types.CHANGE_LIKED_ITEMS, payload: [] });
  dispatch({ type: Types.CHANGE_LIKED_ITEMS, payload: tmpLikedItems });
}

//Remove all items from the cart
export const removeAllItemsFromCart = () => (dispatch) => {
  dispatch({ type: Types.CHANGE_CART_ITEMS, payload: [] });
}

//Add a Order to the Last Order List
export const changeLastOrders = (order) => (dispatch) => {
  dispatch({ type: Types.CHANGE_LAST_ORDERS, payload: order }); 
}