import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomePhotoAlbums  from './HomePhotoAlbums';
import AlbumPreviewTemplate  from './AlbumPreview';
import ViewAlbum  from './ViewAlbum';


Enzyme.configure({ adapter: new Adapter() })

describe('Home Photo Albums Tests', () => {
  
  const AlbumPreview = shallow(<AlbumPreviewTemplate />)

  it('AlbumPreview Snapshot', () => {
    expect(AlbumPreview).toMatchSnapshot();
  });
})