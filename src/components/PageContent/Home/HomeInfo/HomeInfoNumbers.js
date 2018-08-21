import React, { Component } from 'react';

// styled components
import {

    Numbers,
    NumberItem,
    Number,
    ItemDescription

} from './HomeInfoStyled';

export class HomeInfoNumbers extends Component {
  render() {
    return (
      <Numbers>
          
        <NumberItem href="">
            <Number>3238</Number>
            <ItemDescription>Друзей</ItemDescription>
        </NumberItem>

        <NumberItem href="">
            <Number>5М</Number>
            <ItemDescription>Подписчиков</ItemDescription>
        </NumberItem>

        <NumberItem href="">
            <Number>1200</Number>
            <ItemDescription>Фотографий</ItemDescription>
        </NumberItem>

        <NumberItem href="">
            <Number>10</Number>
            <ItemDescription>Отметок</ItemDescription>
        </NumberItem>

        <NumberItem href="">
            <Number>129</Number>
            <ItemDescription>Видеозаписей</ItemDescription>
        </NumberItem>
      </Numbers>
    )
  }
}

export default HomeInfoNumbers
