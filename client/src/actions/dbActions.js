import Types from './actionsTypes';

export const changeCartItems = (currentCartItems, item) => (dispatch) => {
  item.forEach( (element, index) => {
    console.tron.log('element');
    console.tron.log(element);

    console.tron.log('currentCartItems');
    console.tron.log(currentCartItems);

    const newItem = currentCartItems.filter( currentElement => currentElement.id === item[index].id);
  
    console.tron.log('new item')
    console.tron.log(newItem)

    //If is empty, means that this product was not added to the cart yet
    if ( newItem.length === 0) {
      console.tron.log('entrou aqui')
      const cartItems = currentCartItems.concat(element);

      dispatch({ type: Types.CHANGE_CART_ITEMS, payload: cartItems });
    }
  });
  
}

export const changeLikedItems = (currentLikedItems, item) => (dispatch) => {
  const newItem = currentLikedItems.filter( element => element.id === item.id);
  
  //If is empty, means that this product was not added to the liked yet
  if ( newItem.length === 0) {
    const likedItems = currentLikedItems.concat(item);

    dispatch({ type: Types.CHANGE_LIKED_ITEMS, payload: likedItems });
  }
}

export const changeSelectedItems = ( listOfProducts, item ) => (dispatch) => {
  listOfProducts.map(element => { 
    if ( item.id === element.id ) {
      element.selected = !element.selected
    };
  });

  dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: [] })
  dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: listOfProducts })
}

export const clearSelection = ( listOfProducts ) => (dispatch) => {

  listOfProducts.map(element => { 
    if ( element.selected ) {
      element.selected = false
    };
  });

  dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: [] })
  dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: listOfProducts })
}