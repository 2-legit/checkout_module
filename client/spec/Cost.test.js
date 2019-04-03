import React from 'react';
import { shallow } from 'enzyme';
import Cost from '../src/components/Cost';

const setup = () => {
  const wrapper = shallow(<Cost room={ {cost:'216'} }/>);
  return wrapper;
};

describe('Cost Test Suite', () => {

  it('Should render', () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('Should have text', () => {
    const wrapper = setup();
    expect(wrapper.text()).toBe('$216per night');
  });

});