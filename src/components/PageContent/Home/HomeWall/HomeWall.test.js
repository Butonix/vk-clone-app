import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddIcons  from './AddIcons';
import AddSmile  from './AddSmile';
import PostChangeTemplate  from './PostChange';

Enzyme.configure({ adapter: new Adapter() });

describe('Home Wall Tests', () => {
  
  const addIcons = shallow(<AddIcons />);
  const addSmile = shallow(<AddSmile />);
  const postChange = shallow(<PostChangeTemplate />);

  it('Add Icons Snapshot', () => {
    expect(addIcons).toMatchSnapshot();
  });
  it('Add Smile Snapshot', () => {
    expect(addSmile).toMatchSnapshot();
  });

  it('Post Change Snapshot', () => {
    expect(postChange).toMatchSnapshot();
  });
})