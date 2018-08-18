import React, { Component } from 'react';
import styled               from 'styled-components';
import { withBaseIcon }     from 'react-icons-kit';
import { barChart }         from 'react-icons-kit/fa/barChart';  



const SideIconContainer =  withBaseIcon({ size: 17  , style: {
    color: '#55677d',
    cursor: 'pointer',
    width: '30px',
    height: '30px'
  }});



const HomeProfileContainer = styled.div`
    background: #fff;
    padding: 15px;
    cursor: pointer;
    border-radius: 3px;
    img {
        width: 100%;
        
    }
`;

const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    background: url('/images/profile.jpg');
    background-size: cover;
    background-position: center;
`;

const ChangeButton = styled.button`
    background: #e5ebf1;
    border: none;
    color: #55677d;
    font-size: 13px;
    font-weight: normal;
    padding: 6px 35px;
    border-radius: 4px;
`;

const StaticButton = styled.div`
    background: #e5ebf1;
    border-radius: 3px;

`

const Info = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;


export default class HomeProfile extends Component {
  render() {
    return (
      <HomeProfileContainer>
        <ImageContainer>
            <img src="" />
        </ImageContainer>
        <Info>
            <ChangeButton>Редактировать</ChangeButton>
            <StaticButton>
                <SideIconContainer icon={barChart}/>
            </StaticButton>
        </Info>
        
      </HomeProfileContainer>
    )
  }
}
