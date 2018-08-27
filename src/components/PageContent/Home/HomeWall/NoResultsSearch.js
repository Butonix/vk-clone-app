import React, { Component } from 'react';
import { NoResults }        from './HomeWallStyled';
import { connect }          from 'react-redux';

 class NoResultsSearch extends Component {
  render() {
    return (
      <NoResults>
        <p>По запросу {this.props.searchText} ничего не найдено</p>
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