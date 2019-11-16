import Types from './actionsTypes';

export const getListOfProducts = () => (dispatch) => {
  dispatch({ type: Types.GET_LIST_OF_PRODUCTS_IN_PROGRESS });

}