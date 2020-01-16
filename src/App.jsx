import React from 'react';
import Card from './components/Card';
import SimpleForm from './Test.tsx';

const someItems = [
  'item 1',
  'item 2',
  'item 3',
];

const Item = ({ name }) => (<li>{name}</li>);

const App = () => (
  <ul>
    {someItems.map((item) => (
      <Item key={item} name={item} />
    ))}
    <Card text="kljaslkdf klajd k lkjs kjlkasjflk " title="Test title" image="no" />
    <SimpleForm validators={[null, (v) => typeof v === 'string']} />
  </ul>
);

export default App;
