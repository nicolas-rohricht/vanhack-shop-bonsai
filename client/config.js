import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import reactotron, { overlay } from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './src/reducers';

const persistConfig = {
  key: 'root',
  storage: storage, // see "Merge Process" section for details.
 };

 const pReducer = persistReducer(persistConfig, reducers);

export const tron = reactotron
.configure({ host:'192.168.15.3' })
.configure()
.useReactNative()
.use(overlay())
.connect();

tron.clear();

console.tron = tron;

export const store = createStore(
  pReducer,
  {},
  compose( applyMiddleware(ReduxThunk),
  )
);

export const persistor = persistStore(store);