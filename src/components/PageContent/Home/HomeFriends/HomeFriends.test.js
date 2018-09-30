import React from 'react'
import { shallow } from 'enzyme'
import { HomeFriends } from './HomeFriends';

import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16'
//import toJson from 'enzyme-to-json'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

describe('Friend container', () => {
  const props = { // описываем props
    news: {
      data: [],
      isLoading: false,
      errorMsg: null,
    },
    // функция получения новостей onGetNews. Ее содержимое тестировать не нужно.
    // Но нам потребуется протестировать, что функция была вызвана в componentDidMount
    dataFriends: () => {},
  }
  
  describe('News container initial', () => { // группируем еще на один уровень, так как здесь потом будет тест componentDidMount
    const friendsContainer = shallow(<HomeFriends {...props} />)

    it('render initial', () => {
      expect(friendsContainer.find('MyFriends')).toHaveLength(1) // .find + поиск по имени компонента
    })
  })
})