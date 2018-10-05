import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// React Components

import PageHeader from './components/PageHeader/PageHeader';
import PageMenu from './components/PageMenu/PageMenu';
import Home from './components/PageContent/Home/Home';
import Statistics	from './components/PageContent/Statistics/Statistics';

// StyledComponents

import { Container } from './components/StyledComponents';
import { BrowserRouter, Route, Link } from "react-router-dom";

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
							<BrowserRouter>
								<div style={{display: "flex", width: "100%"}}>
									<PageMenu />
									<Route exact path="/" component={Home} />
									<Route path="/static" component={Statistics} />
								</div>
							</BrowserRouter>
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
