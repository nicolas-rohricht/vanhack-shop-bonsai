import Types from '../actions/actionsTypes';

const INITIAL_STATE = {
  listOfProducts: [],
  gettingListOfProducts: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_LIST_OF_PRODUCTS_IN_PROGRESS:
      return {
        ...state,
        gettingListOfProducts: true
      }
    
    case Types.GET_LIST_OF_PRODUCTS_SUCCESS:
    return {
        ...state,
        listOfProducts: action.payload,
        gettingListOfProducts: false
    }

    default:
      return state;
  }
}