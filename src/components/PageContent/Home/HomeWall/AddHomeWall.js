import React, { PureComponent } from 'react'
import { connect }          from 'react-redux';
import onClickOutside       from 'react-onclickoutside';

// Styled components

import {
    HomeWallContainer,
    WallProfile,
    WallAddText,
    AddPanel,
    AddTitle,
    SendAdd
} from './HomeWallStyled';

// React Components 
import AddIcons     from './AddIcons';
import AddSmile     from './AddSmile';

// UI Compoentns 

import Button from './../../../UI/Button';

// Icons

import { withBaseIcon } from 'react-icons-kit';
import { ic_block }     from 'react-icons-kit/md/ic_block';
import { ic_settings }  from 'react-icons-kit/md/ic_settings';


// Actions

import AddWallPost from './../../../../actions/AddWallPost';

const SideIconContainer =  withBaseIcon({ size: 16  , style: {
  color: '#4a76a8',
  cursor: 'pointer',
  width: '30px',
  height: '30px',
  opacity: '.7'
}});

export class AddHomeWall extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      addIconsShow: true,
      addPanelShow: false,
      postText: ''
    }
  }
  handleChange(e) {
    this.setState({
      postText: e.target.value,
    })
  }
  handleClickOutside () {
      this.setState({
        addIconsShow: true,
        addPanelShow: false
       });
  }
  
  handleClick(e) {
    if(this.state.addIconsShow && !this.state.saddPanelShow) {
      this.setState({
        addIconsShow: false,
        addPanelShow: true
       }); 
    }
  }
  handleAddClick(e) {
    const text = this.state.postText;
    if(text.length) {
      this.props.addPost({ text });
    } 
   
  }
  render() {
    return (
      <HomeWallContainer>
        <AddTitle>
          <WallProfile back="./images/profile.jpg"/>
          <WallAddText
              name="text"
              autocomplete="none"
              placeholder="Что у вас нового?"
              value={this.state.postText}
              onClick={this.handleClick.bind(this)}
              onChange={this.handleChange.bind(this)}
          />
          { this.state.addIconsShow ?  <AddIcons /> : <AddSmile />   }
        </AddTitle>
        {
          this.state.addPanelShow ? 
          <AddPanel style={{display: `${this.state.addPanelShow}`}}>
            <AddIcons />  
            <SendAdd>
              <SideIconContainer icon={ ic_settings }/>
              <Button onClick={this.handleAddClick.bind(this)}>  Отправить  </Button>
            </SendAdd>
          </AddPanel>
          : (<div />)
        }
      </HomeWallContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  vall: state.WallAddPost.vall
});


const mapDispatchToProps = (dispacth, props) => ({
  addPost: (post) => {
    dispacth(AddWallPost(post));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(AddHomeWall));
