import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// React Components

import PageHeader from './components/PageHeader/PageHeader';
import PageMenu from './components/PageMenu/PageMenu';
import Home from './components/PageContent/Home/Home';

// StyledComponents

import { Container } from './components/StyledComponents';

import './App.css';

import { AppContent, GlobalStyle } from './AppStyled';

class App extends Component {
	render() {
		return (
			<div className="App">
				<GlobalStyle overflow={this.props.overflow} />
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

const mapStateToProps = state => ({
	overflow: state.rootReducer.overflow,
});

export default connect(mapStateToProps)(App);
