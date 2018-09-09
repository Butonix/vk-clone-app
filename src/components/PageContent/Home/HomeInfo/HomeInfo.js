import React, { Component } from 'react';

import HomeInfoNumbers from './HomeInfoNumbers';

// Styled components
import  {
  HomeInfoContainer,
  NameTitle,
  ProfileStatus,
  CheckOnline,
  InformationContainer,
  Information,
  LeftColumn,
  RightColumn,
  MoreInfo,
  MoreInfoBlock,
  InfoTitle
} from './HomeInfoStyled';

export default class HomeInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      text: 'Показать подробную информацию'
    }
  }

  handleClick = e => {

    e.preventDefault();

    if (this.state.display === 'none') {
      this.setState({
        display: 'block',
        text: 'Show full information'
      });
      
    } else {
      this.setState({
        display: 'none',
        text: 'Hide full information'
      });
    }
  }

  render() {
    return (
      <HomeInfoContainer>
        <NameTitle>Ivan Zvonkov<CheckOnline>Online</CheckOnline> </NameTitle>
        <ProfileStatus>Undefined is not a function</ProfileStatus>
        <InformationContainer>

          <Information>
            <LeftColumn>Birthday:</LeftColumn>
            <RightColumn >
             <a href="">June 2</a>
              </RightColumn>
          </Information>

          <Information>
            <LeftColumn>Relationship status:</LeftColumn>
              <RightColumn ><a href="">Actively searching</a></RightColumn>
          </Information>
          <MoreInfo onClick={this.handleClick.bind(this)}>
            <Information>
              <LeftColumn></LeftColumn>
                <RightColumn href="" ><a href="">{this.state.text}</a> </RightColumn>
            </Information>
          </MoreInfo>
          <MoreInfoBlock style={{display: `${this.state.display}`}}>
            <InfoTitle><b>Основная информация</b> </InfoTitle>
            <Information>
                <LeftColumn>Hometown:</LeftColumn>
                <RightColumn >Saint-Petersburg</RightColumn>
            </Information>

             <Information>
                <LeftColumn>Languages</LeftColumn>
                <RightColumn >Русский</RightColumn>
            </Information>

             <InfoTitle><b>Personal information</b> </InfoTitle>
            <Information>
                <LeftColumn>Favorite quotes </LeftColumn>
                <RightColumn>The secret of success is consistency of purpose.</RightColumn>
            </Information>

             <Information>
                <LeftColumn>Groups: </LeftColumn>
                <RightColumn >
                  <a href="">PiterJS</a>, 
                  <a href="">Flickr</a>, 
                  <a href="">Piter Css</a>, 
                  <a href="">Meduza</a>, 
                </RightColumn>
            </Information>
          </MoreInfoBlock>
          <HomeInfoNumbers />
        </InformationContainer>
      </HomeInfoContainer>
    )
  }
}

