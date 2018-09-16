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
import ShowModal   from './../../../../actions/ShowModal';

// React Components

import AlbumPreviewTemplate from './AlbumPreview';
import ViewAlbum            from './ViewAlbum';


class HomePhotoAlbums extends PureComponent {
  componentDidMount() {
    this.props.dataPhotos();
  }
  handleClick(e) {
    this.props.showModal();
    console.log(e)
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
                key={index}
                imageUrl={item.urls.regular}
                onClick={this.handleClick.bind(this)}
              />
            )
          }) : ''
        }
        <ViewAlbum 
          show={this.props.modalShow}
        />
      </HomePhotoAlbumsContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  photos: state.Photos.data,
  modalShow: state.rootReducer.modalShow
})

const mapDispatchToProps = (dispatch) => ({
  dataPhotos() {
    dispatch(fetchPhotos());
  },
  showModal() {
    dispatch(ShowModal())
  }

});


export default connect(mapStateToProps, mapDispatchToProps)(HomePhotoAlbums);

