import React, { Component } from 'react';

import data from './data';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';

// React Components

import PagePagination from './../../PagePagination/PagePagination';
import { HeadH3, Text } from './../../UI/Typography';

// Styled Components

import { StatictsContainer, ChartContainer } from './StatisticsStyled';

import { PageHeaderBlock } from './../../../AppStyled';

const toRoutArray = ['Ivan Zvonkov', 'Statistics'];

export default class Statistics extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.setState({
			data: data.reverse(),
		});
	}
	render() {
		return (
			<StatictsContainer>
				<PageHeaderBlock>
					<PagePagination toRoutArray={toRoutArray} />
				</PageHeaderBlock>
				<ChartContainer>
					<HeadH3>Audience coverage</HeadH3>
					<Text>
						This graph shows data for all users who have seen your posts —
						either on your wall or in their News feeds.
					</Text>
					<LineChart
						width={800}
						height={400}
						data={this.state.data}
						margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="#4a76a8" />
						<XAxis dataKey="Date" stroke="#999" />
						<YAxis stroke="#5b88bd" />
						<Tooltip />
						<Line
							name="full coverage"
							type="monotone"
							dataKey="Value"
							stroke="#5b88bd"
							strokeDasharray=""
						/>
					</LineChart>
				</ChartContainer>
			</StatictsContainer>
		);
	}
}
