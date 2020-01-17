import React from 'react';
import { Provider } from 'react-redux';
import Card from './components/Card';
import Hits from './components/Hits';
import SimpleForm from './SimpleForm';
import store from './store';

const someItems = [
  'item 1',
  'item 2',
  'item 3',
];

const Item = ({ name }: {name: string}) => (<li>{name}</li>);

const App = () => (
  <Provider store={store}>
    <ul>
      {someItems.map((item) => (
        <Item key={item} name={item} />
      ))}
      <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." title="Test title" image="no" />
      <SimpleForm validators={[() => true, (v) => typeof v === 'string']} />
      <Hits />
    </ul>
  </Provider>
);

export default App;
