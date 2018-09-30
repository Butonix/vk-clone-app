import React, { Component, Fragment } from 'react';
import { GrayLink, BlockTitle } from './../HomeStyled';
import { connect } from 'react-redux';

// React Compoenents
import Friend from './Friend';

// Styled Compoenents
import {
	HomePreindsContainer,
	MyFreinds,
	FreindsNumber,
	FreindsTitle,
} from './HomeFriendsStyled';

//Actions

import fetchFreinds from './../../../../actions/Freinds/FetchFreinds';

class HomeFriends extends Component {
	componentDidMount() {
		this.props.dataFreinds();
	}
	render() {
		const friends = this.props.freinds;
		friends ? console.log(this.props) : ''
		return (
			<Fragment>
				<HomePreindsContainer>
					<BlockTitle>
						<FreindsTitle>
							Friends <FreindsNumber>3328</FreindsNumber>
						</FreindsTitle>
						<GrayLink href="#">updates </GrayLink>
					</BlockTitle>
					<MyFreinds>
						{friends
							? friends.map((item, index) => {
									return (
										<Friend
											key={index}
											name={item.name.first}
											freindPhoto={item.picture.medium}
										/>
									);
							  })
							: ''}
					</MyFreinds>
				</HomePreindsContainer>
				<HomePreindsContainer>
					<BlockTitle>
						<FreindsTitle>
							Friends Online <FreindsNumber>1236</FreindsNumber>
						</FreindsTitle>
					</BlockTitle>
					<MyFreinds>
						{friends
							? friends.reverse().map((item, index) => {
									return (
										<Friend
											key={index}
											name={item.name.first}
											freindPhoto={item.picture.medium}
										/>
									);
							  })
							: ''}
					</MyFreinds>
				</HomePreindsContainer>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	freinds: state.Freinds.data,
});

const mapDispatchToProps = dispatch => ({
	dataFreinds() {
		dispatch(fetchFreinds());
	},
});




export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeFriends);
