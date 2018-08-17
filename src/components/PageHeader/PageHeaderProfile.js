import React, { Component } from 'react'
import styled               from 'styled-components';
import { chevronDown }      from 'react-icons-kit/fa/chevronDown';
import { withBaseIcon }     from 'react-icons-kit';


const SideIconContainer =  withBaseIcon({ size: 12  , style: {
  marginLeft: "10px",
  color: '#fff',
  cursor: "pointer",
}});


const ProfileContainer = styled.div`
    display: flex;
    flex-basis: 50%;
    justify-content: flex-end;
    span {
        padding: 18px 15px 0px 0px;
        font-weight: bold;
        font-size: 12px;
        color: #fff;
    }

`;


const ProfileIcon = styled.div`
    width: 28px;
    height: 28px;
    background: #333;
    border-radius: 50%;
    margin: 10px 0;
`

export default class PageHeaderProfile extends Component {

  render() {
    return (
      <ProfileContainer>
        <span>Иван</span>
        <ProfileIcon />
        <SideIconContainer icon={chevronDown} />
      </ProfileContainer>
    )
  }
}
