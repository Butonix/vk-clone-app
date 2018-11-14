import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

// React Components

import PageHeader from './components/PageHeader/PageHeader';
import PageMenu from './components/PageMenu/PageMenu';
import Home from './components/PageContent/Home/Home';
import Statistics from './components/PageContent/Statistics/Statistics';
import News from './components/PageContent/News/News';
import Friends from './components/PageContent/Friends/Friends';
import GoUp from './components/GoUp/GoUp';

// Styled Components

import { Container } from './components/StyledComponents';
import { AppContent, GlobalStyle } from './AppStyled';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<GlobalStyle overflow={this.props.overflow} />
				<PageHeader />
				<AppContent>
					<GoUp />
					<Container>
						<BrowserRouter>
							{/* FIXME: */}
							<div style={{ display: 'flex', width: '100%' }}>
								<PageMenu />
								<Route exact path="/Vk-clone" component={Home} />
								<Route path="/Vk-clone/static" component={Statistics} />
								<Route path="/Vk-clone/friends" component={Friends} />
								<Route path="/Vk-clone/news" component={News} />
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
