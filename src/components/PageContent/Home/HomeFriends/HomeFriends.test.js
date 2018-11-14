import React from 'react';
import { shallow } from 'enzyme';
import Friend from './Friend';

import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Home Friends Tests', () => {
	const friendsItem = shallow(<Friend />);

	it('Friends Item Snapshot', () => {
		expect(friendsItem).toMatchSnapshot();
	});
});
