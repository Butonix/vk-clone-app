import React, { Component } from 'react';
import styled            from 'styled-components';
import PageHeader           from './components/PageHeader/PageHeader';
import './App.css';






class App extends Component {
  render() {
    return (
      <div className="App">
          <PageHeader />
      </div>
    );
  }
}

export default App;
