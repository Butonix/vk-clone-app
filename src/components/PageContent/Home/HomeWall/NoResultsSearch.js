import React, { Component } from 'react';
import { NoResults }        from './HomeWallStyled';
import { connect }          from 'react-redux';

 class NoResultsSearch extends Component {
  render() {
    return (
      <NoResults>
        <p>Nothing was found on the request of {this.props.searchText} </p>
      </NoResults>
    )
  }
}


const mapStateToProps = (state) => ({
    searchText: state.WallAddPost.searchText
  })
  
  const mapDispatchToProps = {
    
  }

  export default connect(mapStateToProps, mapDispatchToProps)(NoResultsSearch);