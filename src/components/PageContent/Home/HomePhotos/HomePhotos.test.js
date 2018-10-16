import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomePhoto from './HomePhoto';

Enzyme.configure({ adapter: new Adapter() });

describe('Home Photos Tests', () => {
	const homePhoto = shallow(<HomePhoto />);

	it('AlbumPreview Snapshot', () => {
		expect(homePhoto).toMatchSnapshot();
	});
});
