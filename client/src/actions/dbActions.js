import Types from './actionsTypes';

export const changeCartItems = (listOfProducts, currentCartItems, item) => (dispatch) => {
  const newItem = currentCartItems.filter( element => element.id === item.id);
  console.tron.log(item)
  //If is empty, means that this product was not added to the cart yet
  if ( newItem.length === 0) {
    const cartItems = currentCartItems.concat(item);

    dispatch({ type: Types.CHANGE_CART_ITEMS, payload: cartItems });
  }
}