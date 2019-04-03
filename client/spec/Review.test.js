import React from 'react';
import { shallow } from 'enzyme';
import Review from '../src/components/Review';

const setup = () => {
  const wrapper = shallow(<Review room={ {reviews:'216'} }/>);
  return wrapper;
};

describe('Cost Test Suite', () => {

  it('Should render', () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('Should have text', () => {
    const wrapper = setup();
    expect(wrapper.text()).toBe('Reviews 216');
  });

});