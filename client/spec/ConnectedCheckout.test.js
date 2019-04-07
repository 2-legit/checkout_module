import React from 'react';
import { shallow, mount } from 'enzyme';
import { MOCK_ROOM } from './constants';
import ConnectedCheckout from '../src/components/ConnectedCheckout';
import Checkout from '../src/components/Checkout';
import axios from 'axios';


jest.mock('axios');

describe('ConnectedCheckout Test Suite', () => {
  beforeEach(() => {
    const resp = { data: MOCK_ROOM };
    axios.get.mockImplementation(() => Promise.resolve(resp));
  });
  it('Should render Checkout component', () => {
    let wrapper = shallow(<ConnectedCheckout />);
    expect(wrapper.find(Checkout)).toHaveLength(1);
  });
  
  it('Should perform GET request on mount', () => {
    expect(axios.get).toHaveBeenCalled();
  });
});
