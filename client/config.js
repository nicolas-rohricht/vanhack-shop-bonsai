import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';

export const store = createStore(
  reducers,
  {},
  compose( applyMiddleware(ReduxThunk),
  )
);