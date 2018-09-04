import React, { Component, PureComponent, Fragment } from 'react'
import { connect }          from 'react-redux';


// Actions 

import DeleteWallPost   from './../../../../actions/DeleteWallPost';
import SearchWallPost   from './../../../../actions/SearhWall';
import resultSearchWall from './../../../../actions/ResultSearchWall';

// Styled Components

import {
    WallContainer,
    WallProfile,
    Post,
    PostTitle,
    PostContent,
    PostSettings,
    PostChange,
    PostProfile,
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
import { heart }        from 'react-icons-kit/fa/heart';
import { comment}       from 'react-icons-kit/fa/comment';
import { share }        from 'react-icons-kit/fa/share';
import { search }       from 'react-icons-kit/fa/search';
import { ic_close }     from 'react-icons-kit/md/ic_close';

// React compoents

import NoResultsSearch     from './NoResultsSearch';
import PostChangeTemplate  from './PostChange'; 




const SideIconContainer =  withBaseIcon({ size: 18  , style: {
  color: '#4a76a8',
  cursor: 'pointer',
  width: '30px',
  height: '30px',
  opacity: '.8 '
}});


export class HomeWall extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      postId: '',
      searchShow: true,
      vallLength: true,
     
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
    
      vallLength: nextProps.vall.length
    }
  }
  handleClick(e) {
    if(!this.state.searchShow) {
        this.setState({searchShow: true})
    }  else {
        this.setState({searchShow: false})
    }
  }
  
  handleChangSearch(e) {
    this.props.searchPost(e.target.value);
  }
  render() {
      return(
        <Fragment>
        {this.state.searchShow ? 
          ( <PositionSearch>
              <SearchWallContainer>
              <ChoiceWallLinks>
                  <ChoiceWallLink>Все записи</ChoiceWallLink>
                  <ChoiceWallLink lineShow={true}>Мои записи</ChoiceWallLink>
              </ChoiceWallLinks>
              <SearchWallIcon>
                  <SideIconContainer  
                  onClick={this.handleClick.bind(this)}
                  icon={search }/>
              </SearchWallIcon>
          </SearchWallContainer>
        </PositionSearch> ) : 
      
        ( <PositionSearch>
            <WallSearch>
              <SideIconContainer  
                  icon={ search }
              />
              <WallSearchInput
                autoFocus={true}
                placeholder="Введите ваш запрос"
                onChange={this.handleChangSearch.bind(this)}
              />
              <SideIconContainer  
                onClick={this.handleClick.bind(this)}
                icon={ ic_close }
              />
            </WallSearch>
          </PositionSearch>
        )
      }
    
      <WallContainer>
         {!this.state.vallLength ? (<NoResultsSearch />) :  ''}
          {this.props.vall.map((item, index) => {
            return (
              <Post key={index} >
                  <PostTitle>
                    <PostProfile>
                      <WallProfile back="./images/profile.jpg"/>
                      <span>Иван Звонков</span>
                    </PostProfile>
                    <PostChangeTemplate
                    //  postid={this.upDatePostID(item.id)}
                    //  deletePost={this.deletPost.bind(this)}
                    />
                  </PostTitle>
                  <PostContent>
                    <p>{item.text}</p> 
                  </PostContent>
                  <PostSettings>
                      <SideIconContainer icon={heart}/>
                      <SideIconContainer icon={comment}/>
                      <SideIconContainer icon={share}/>
                  </PostSettings>
              </Post>
            )
          }) 
        }
      </WallContainer>
    </Fragment>
  )
  }
}

const mapStateToProps = (state) => ({
  vall: state.WallAddPost.posts.filter(item => item.text.includes(state.WallAddPost.searchText)),
  resultSearchWall: state.WallAddPost.resultSearch
})

const mapDispatchToProps = (dispatch) => ({
  resultSearch: (result) => {
    dispatch(resultSearchWall(result))
  },
  deletePost: (post) => {
    dispatch(DeleteWallPost(post));
  },
  searchPost: (postText) => {
    dispatch(SearchWallPost(postText));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeWall);
