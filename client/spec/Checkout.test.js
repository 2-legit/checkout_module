import React from 'react';
import { shallow, mount } from 'enzyme';
import { MOCK_ROOM } from './constants';

import Checkout from '../src/components/Checkout';
import Cost from '../src/components/Cost';

const LOADED_PROPS = {
  isLoaded: true,
  room: [MOCK_ROOM],
};

describe('Checkout Test Suite', () => {

  it('Should render', () => {
    const wrapper = shallow(<Checkout {...LOADED_PROPS} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Should have one <Cost /> component', () => {
    const wrapper = mount(<Checkout {...LOADED_PROPS} />);
    expect(wrapper.find(Cost)).toHaveLength(1);
  });

  it('Should render loading placeholder if isLoaded is false', () => {
    const wrapper = mount(<Checkout  isLoaded={false} />);
    expect(wrapper.find('div').text()).toBe('Loading...');
  });
});
