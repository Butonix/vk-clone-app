import React, { Component,Fragment  }     from 'react';
import { GrayLink, BlockTitle } from './../HomeStyled';


import {connect} from 'react-redux';

// React Compoenents

import Friend from './Friend';


// Styled Compoenents
import {
    HomePreindsContainer,
    MyFreinds,
    FreindsNumber,
    FreindsTitle
} from './HomeFriendsStyled';

//Actions 

import fetchFreinds from './../../../../actions/Freinds/FetchFreinds';

 class HomeFriends extends Component {
  componentDidMount () {
    this.props.dataFreinds()
  }
  render() {
    const freinds = this.props.freinds;
    return (
    <Fragment>
      <HomePreindsContainer>
         <BlockTitle>
          <FreindsTitle>Мои друзья <FreindsNumber>3328</FreindsNumber></FreindsTitle>
          <GrayLink href="#">Обновления</GrayLink>
        </BlockTitle>
        <MyFreinds> 
            {
              freinds ? freinds.map((item, index) =>{
                  return  ( 
                  <Friend 
                    key={index} 
                    name={item.name.first}
                    freindPhoto={item.picture.medium}
                  /> 
                )
              }) : ''
            }
        </MyFreinds>
      </HomePreindsContainer>
       <HomePreindsContainer>
        <BlockTitle>
          <FreindsTitle>Друзья Онлайн <FreindsNumber>1236</FreindsNumber></FreindsTitle>
        </BlockTitle>
        <MyFreinds>
        {
              freinds ? freinds.reverse().map((item, index) =>{
                  return  ( 
                  <Friend 
                    key={index} 
                    name={item.name.first}
                    freindPhoto={item.picture.medium}
                  /> 
                )
              }) : ''
            }
        </MyFreinds>
    </HomePreindsContainer>
  </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  freinds: state.Freinds.data
})

const mapDispatchToProps = (dispatch) => ({
  dataFreinds() {
    dispatch(fetchFreinds())
  }
});


export default connect(mapStateToProps,mapDispatchToProps)(HomeFriends);