//This .js file was created to simulate the API call to get the list of products

import Types from './actionsTypes';
import { products } from '../components/db';

export const getListOfProducts = () => (dispatch) => {
  dispatch({ type: Types.GET_LIST_OF_PRODUCTS_IN_PROGRESS });
  
  setTimeout( () => {
      dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: products })
    }, 
    3500 
  );
}