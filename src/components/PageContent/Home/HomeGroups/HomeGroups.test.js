import React from 'react'
import { shallow } from 'enzyme'
import HomeGroups  from './HomeGroups';
import GroupItem from './GroupItem';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Home Groups Tests', () => {
  
  const groupsContainer = shallow(<HomeGroups/>)
  const groupsItem = shallow(<GroupItem />)

  it('Groups Snapshot', () => {
    expect(groupsContainer).toMatchSnapshot();
  });
  it('Groups Item Snapshot', () => {
    expect(groupsItem).toMatchSnapshot();
  });
})