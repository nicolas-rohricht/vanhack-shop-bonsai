import Types from './actionsTypes';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const getListOfProducts = () => (dispatch) => {
  const GET_PRODUCTS = gql`
    {
      products {
        id
        name
        price
        description
        color
        size
        image
      }
    }`;
  const { error, data } =  useQuery(GET_PRODUCTS);
  return new Promise(  (resolve, reject) => {
    dispatch({ type: Types.GET_LIST_OF_PRODUCTS_IN_PROGRESS });

    

    

      if (data && data.products) {
        dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS,
                   payload: data.products });
        resolve();
      }
    else {
      reject({ message: error });
    }
  })


}