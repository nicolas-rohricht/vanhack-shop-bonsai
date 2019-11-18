import Types from '../actions/actionsTypes';

const INITIAL_STATE = {
  cartItems: [],
  likedItems: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CHANGE_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload
      }
    
    case Types.CHANGE_LIKED_ITEMS: 
      return {
        ...state,
        likedItems: action.payload
      }

    default:
      return state;
  }
}