import React from 'react';
import { mount } from 'enzyme';
import App from './app';

test('app should be rendered', () => {
  const wrapper = mount(<App />);
  expect(wrapper).toMatchSnapshot();
});
