import React from 'react';
import { Provider } from 'react-redux';
import Hits from './containers/hits-list-container';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Hits />
  </Provider>
);

export default App;
