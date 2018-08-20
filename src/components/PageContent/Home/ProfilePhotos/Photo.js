import React from 'react';
import { PhotoItem } from './ProfilePhotosStyled';



const Photo = (props) => {
  return (
    <PhotoItem href="#" style={{ backgroundImage: 'url(' + props.imgUrl + ')',}}>
    </PhotoItem>
  )
}

export default Photo;
