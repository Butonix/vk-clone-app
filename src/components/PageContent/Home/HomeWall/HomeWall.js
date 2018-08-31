import React, { Component, PureComponent, Fragment } from 'react'
import { connect }          from 'react-redux';


// Actions 

import DeleteWallPost   from './../../../../actions/DeleteWallPost';
import SearchWallPost   from './../../../../actions/SearhWall';
import ResultSearchWall from './../../../../actions/ResultSearchWall';

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


export class HomeWall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postId: '',
      searchShow: true
    }
  }
  // upDatePostID = (postid) => {
  //   this.setState({postId: postid})
  // }
  searchPost() {
    if (!this.props.vall.length) {
      this.props.resultSearch(false);
    }
  }
  deletPost(e) {
     this.props.deletePost(this.state.postid);
  }
  handleClick(e) {
    if(!this.state.searchShow) {
        this.setState({searchShow: true})
    }  else {
        this.setState({searchShow: false})
    }
  }
  handleChange (e) {
      this.props.searchPost(e.target.value);
      if (!this.props.vall.length) {
        this.props.resultSearch(false)
      } else {
        this.props.resultSearch(true)
      }
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
                onChange={this.handleChange.bind(this)}
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
        {!this.props.resultWallSearch ? (<NoResultsSearch />) :  ''}
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
                     deletePost={this.deletPost.bind(this)}
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
  resultWallSearch: state.WallAddPost.resultSearch,
})

const mapDispatchToProps = (dispatch) => ({
  deletePost: (post) => {
    dispatch(DeleteWallPost(post));
  },
  resultSearch: (result) => {
    dispatch(ResultSearchWall(result));
  },
  searchPost: (postText) => {
    dispatch(SearchWallPost(postText));
},
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeWall);
