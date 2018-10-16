import React from 'react';
import { shallow } from 'enzyme';
import HomeInfo from './HomeInfo';
import HomeInfoNumbers from './HomeInfoNumbers';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('Home Info Tests', () => {
	const homeInfo = shallow(<HomeInfo />);
	const homeInfoNumber = shallow(<HomeInfoNumbers />);

	it('HomeInfo Snapshot', () => {
		expect(homeInfo).toMatchSnapshot();
	});
	it('HomeInfoNumer Snapshot', () => {
		expect(homeInfoNumber).toMatchSnapshot();
	});
});
