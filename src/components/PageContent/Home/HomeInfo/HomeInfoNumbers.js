import React, { Component } from 'react';

// styled components
import { Numbers, NumberItem, Number, ItemDescription } from './HomeInfoStyled';

export class HomeInfoNumbers extends Component {
	render() {
		return (
			<Numbers>
				<NumberItem href="">
					<Number>3238</Number>
					<ItemDescription>friends</ItemDescription>
				</NumberItem>

				<NumberItem href="">
					<Number>5М</Number>
					<ItemDescription>followers</ItemDescription>
				</NumberItem>

				<NumberItem href="">
					<Number>1200</Number>
					<ItemDescription>photos</ItemDescription>
				</NumberItem>

				<NumberItem href="">
					<Number>10</Number>
					<ItemDescription>tags</ItemDescription>
				</NumberItem>

				<NumberItem href="">
					<Number>129</Number>
					<ItemDescription>videos</ItemDescription>
				</NumberItem>

				<NumberItem href="">
					<Number>2159</Number>
					<ItemDescription>audio files</ItemDescription>
				</NumberItem>
			</Numbers>
		);
	}
}

export default HomeInfoNumbers;
