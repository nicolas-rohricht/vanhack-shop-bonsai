import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import client from './src/createClient';
import Products from './src/components/Products';
import Router from './router';
import { store } from './config';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router />
        </ApolloProvider>
      </Provider>
    )
  }
}

export default App