import { combineReducers } from 'redux';

import productsReducer from './produtcsReducer';
import dbReducer from './dbReducer';

export default combineReducers({
  productsReducer,
  dbReducer
});