import React, { Component } from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import axios from 'axios';

// Styled Components
import {
	StatictsContainer,
	StatictsTop,
	ChartContainer,
} from './StatisticsStyled';

import { PageHeaderBlock } from './../../../AppStyled';

// React Components
import PagePagination from './../../PagePagination/PagePagination';
import data from './data';

const toRoutArray = ['Ivan Zvonkov', 'Statistics'];

export default class Statistics extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.setState({
			data: data,
		});
	}
	render() {
		return (
			<StatictsContainer>
				<PageHeaderBlock>
					<PagePagination toRoutArray={toRoutArray} />
				</PageHeaderBlock>
				<ChartContainer>
					<LineChart
						width={800}
						height={400}
						data={this.state.data}
						margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="" />
						<XAxis dataKey="Date" stroke="#777" />
						<YAxis stroke="#5b88bd" />
						<Tooltip />
						<Line
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
