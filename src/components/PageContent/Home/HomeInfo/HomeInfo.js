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
        text: 'Скрыть подробную информацию'
      });
      
    } else {
      this.setState({
        display: 'none',
        text: 'Показать подробную информацию'
      });
    }
  }

  render() {
    return (
      <HomeInfoContainer>
        <NameTitle>Иван Звонков <CheckOnline>Online</CheckOnline> </NameTitle>
        <ProfileStatus>Undefined is not a function</ProfileStatus>
        <InformationContainer>

          <Information>
            <LeftColumn>День рождения </LeftColumn>
            <RightColumn >
             <a href="">2 июня</a>
              </RightColumn>
          </Information>

          <Information>
            <LeftColumn>Семейное положение </LeftColumn>
              <RightColumn ><a href="">в активном поиске</a></RightColumn>
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
                <LeftColumn>Родной город </LeftColumn>
                <RightColumn >Санкт-Петербург</RightColumn>
            </Information>

             <Information>
                <LeftColumn>Языки </LeftColumn>
                <RightColumn >Русский</RightColumn>
            </Information>

             <InfoTitle><b>Личная информация</b> </InfoTitle>
            <Information>
                <LeftColumn>Любимые цитаты </LeftColumn>
                <RightColumn>Секрет успеха состоит в постоянстве цели</RightColumn>
            </Information>

             <Information>
                <LeftColumn>Группы </LeftColumn>
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

