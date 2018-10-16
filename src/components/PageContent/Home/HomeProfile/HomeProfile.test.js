import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomeProfile from './HomeProfile';

Enzyme.configure({ adapter: new Adapter() });

describe('Home Profile Tests', () => {
	const homeProfile = shallow(<HomeProfile />);

	it('AlbumPreview Snapshot', () => {
		expect(homeProfile).toMatchSnapshot();
	});
});
