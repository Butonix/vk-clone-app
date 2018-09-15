import React, { PureComponent } from 'react';
import { connect }              from 'react-redux';

// Styled Components

import {
  HomePhotoAlbumsContainer,
  PhotosNumber,
  PhotosTitle,
} from './HomePhotoAlbumsStyled';

import { GrayLink, BlockTitle } from './../HomeStyled';

//Actions

import fetchPhotos from './../../../../actions/Photos/FetchPhotos';

// React Components

import AlbumPreviewTemplate from './AlbumPreview';
import ViewAlbum            from './ViewAlbum';


class HomePhotoAlbums extends PureComponent {
  componentDidMount() {
    this.props.dataPhotos();
  }
  render() {
    return (
      <HomePhotoAlbumsContainer>
         <BlockTitle>
          <PhotosTitle>Photo albums<PhotosNumber>2</PhotosNumber></PhotosTitle>
        </BlockTitle>
        {
          this.props.photos ? this.props.photos.slice(8).map((item, index) =>{
            return (
              <AlbumPreviewTemplate 
                imageUrl={item.urls.regular}
              />
            )
          }) : ''
        }
        <ViewAlbum />
      </HomePhotoAlbumsContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  photos: state.Photos.data
})

const mapDispatchToProps = (dispatch) => ({
  dataPhotos() {
    dispatch(fetchPhotos());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePhotoAlbums);

