import React, { Component, Fragment } from 'react'
import { connect }          from 'react-redux';

// Styled compoenents 

import { 
    SearchWallContainer,
    ChoiceWallLinks,
    ChoiceWallLink,
    SearchWallIcon,
    WallSearch,
    WallSearchInput,
    PositionSearch
} from './HomeWallStyled';

// Icons 
import { withBaseIcon } from 'react-icons-kit';
import { search }          from 'react-icons-kit/fa/search';
import { ic_close } from 'react-icons-kit/md/ic_close'

const SideIconContainer =  withBaseIcon({ size: 18  , style: {
    color: '#4a76a8',
    cursor: 'pointer',
    width: '30px',
    opacity: '.6'
  }});
  

export class SearchWall extends Component {
  constructor(props) {
      super(props);
      this.state = {
          searchShow: true
      }
  }
  render() {
    if (this.state.searchShow) {
        return (
            <PositionSearch>
            <SearchWallContainer>
            <ChoiceWallLinks>
                <ChoiceWallLink>Все записи</ChoiceWallLink>
                <ChoiceWallLink lineShow={true}>Мои записи</ChoiceWallLink>
            </ChoiceWallLinks>
            <SearchWallIcon>
                <SideIconContainer  icon={search }/>
            </SearchWallIcon>
        </SearchWallContainer>
       </PositionSearch>
        )
    } else {
        return (
            <PositionSearch>
                <WallSearch>
                    <SideIconContainer  icon={ search }/>
                    <WallSearchInput />
                    <SideIconContainer  icon={ ic_close }/>
                </WallSearch>
           </PositionSearch>
        )
    
    }
    return (
       <div />
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWall)
