import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import client from './src/createClient';
import Router from './router';
import { persistor, store } from './config';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default App