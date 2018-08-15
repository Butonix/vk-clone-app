import React                from 'react';
import * as enzyme          from 'enzyme';
import { shallow }          from 'enzyme';
import { shallowToJson }    from 'enzyme-to-json';
import Adapter              from 'enzyme-adapter-react-16';
import PageHeaderLogo       from './PageHeaderLogo';


enzyme.configure({ adapter: new Adapter() });


describe('PageHeaderLogo', () => {
    it('render correctly', () => {
      const output = shallow(
        <PageHeaderLogo  
            alt="vk-logo"
            src="/images/vk-logo.svg"
            title="vk-logo"
        />
      );
      expect(shallowToJson(output)).toMatchSnapshot();
    });
  });