import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reactotron, { overlay } from 'reactotron-react-native';

import reducers from './src/reducers';

export const tron = reactotron
.configure({ host:'192.168.25.40' })
.configure()
.useReactNative()
.use(overlay())
.connect();

tron.clear();

console.tron = tron;

export const store = createStore(
  reducers,
  {},
  compose( applyMiddleware(ReduxThunk),
  )
);