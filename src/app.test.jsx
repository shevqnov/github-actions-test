import React from 'react';
import { mount } from 'enzyme';
import App from './App';

test('app should be rendered', () => {
  const wrapper = mount(<App />);
  expect(wrapper).toMatchSnapshot();
});
