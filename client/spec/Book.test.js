import React from 'react';
import { shallow } from 'enzyme';
import Book from '../src/components/Book';

const setup = () => {
  const wrapper = shallow(<Book />);
  return wrapper;
};

describe('Cost Test Suite', () => {

  it('Should render', () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });
});