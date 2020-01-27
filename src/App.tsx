import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';
import Hits from './containers/hits-list-container';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Container
      style={{
        fontFamily: 'Roboto',
      }}
      maxWidth="md"
    >
      <Hits />
    </Container>
  </Provider>
);

export default App;
