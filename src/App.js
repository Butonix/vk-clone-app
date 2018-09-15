import React, { Component } from 'react';
import styled               from 'styled-components';


// React Components

import PageHeader           from './components/PageHeader/PageHeader';
import PageMenu             from './components/PageMenu/PageMenu';
import { Container }        from './components/StyledComponents';
import Home                 from './components/PageContent/Home/Home';

import './App.css';

import {
  AppContent,
  GlobalStyle
} from './AppStyled';

class App extends Component {
  render() {
    return (
      <div className="App">
         <GlobalStyle />
          <PageHeader />
          <AppContent>
            <Container>
              <PageMenu />
              <Home />
            </Container>
          </AppContent>
      </div>
    );
  }
}

export default App;
