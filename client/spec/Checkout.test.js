import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios';


import Checkout from '../src/components/Checkout';
import Cost from '../src/components/Cost';
// jest.mock('axios');
// needs to be in this scope, but in this scope breaks other tests

describe('Checkout Test Suite', () => {

  it('Should render', () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.exists()).toBe(true);
  });

  xit('Should have one <Cost /> component', () => {
    const wrapper = mount(<Checkout />);
    expect(wrapper.find(Cost)).toHaveLength(1);
  });

  xit('Should fetch rooms', () => {
    const room = [{roomId: '1'}];
    const resp = {data: room};
    axios.get.mockImplementation(() => Promise.resolve(resp));
  });

});
