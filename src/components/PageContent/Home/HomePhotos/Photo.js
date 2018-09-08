import React from 'react';
import { PhotoItem } from './HomePhotosStyled';



const Photo = (props) => {
  return (
    <PhotoItem href="#" style={{ backgroundImage: 'url(' + props.imgUrl + ')',}}>
    </PhotoItem>
  )
}

export default Photo;