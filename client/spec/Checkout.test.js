import React from 'react';
import { shallow } from 'enzyme';


import Checkout from '../src/components/Checkout.jsx';

const setup = () => {
  const wrapper = shallow(<Checkout />);
  return wrapper;
};

describe('Checkout Test Suite', () => {
  it('Should have text', () => {
    const wrapper = setup();
    expect(wrapper.text()).toBe('You are the best');
  });
});
