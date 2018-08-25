import React, { Component } from 'react';
import styled               from 'styled-components';



import PageHeader           from './components/PageHeader/PageHeader';
import PageMenu             from './components/PageMenu/PageMenu';
import { Container }        from './components/StyledComponents';
import Home                 from './components/PageContent/Home/Home';

import './App.css';

const AppContent = styled.div`
  padding: 20px 0;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
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
