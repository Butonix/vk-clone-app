import React, { Component } from 'react';
import styled from 'styled-components';

const DateResult = styled.div`
	color: #939393;
	font-size: 12px;
	margin-top: 5px;
`;

export default class DateParse extends Component {
	render() {
		let result;
		let currentDate = new Date();
		let date = new Date(this.props.date);
		let DateMinutes = date.getMinutes().toString();
		let DateHours = date.getHours().toString();
		let DateDay = date.getDate().toString();
		let DateMonthString = date.toLocaleString('en-us', { month: 'long' });

		if (DateMinutes.length == 1) {
			DateMinutes = '0' + DateMinutes;
		}
		if (DateHours.length == 1) {
			DateHours = '0' + DateHours;
		}

		if (currentDate.getDate() === date.getDate()) {
			result = `Today in ${DateHours}:${DateMinutes}`;
		} else if (currentDate.getDate() - 1 === date.getDate()) {
			result = `Yesterday in ${DateHours}:${DateMinutes}`;
		} else {
			result = `${DateDay} ${DateMonthString} in ${DateHours}:${DateMinutes}`;
		}

		return <DateResult> {result} </DateResult>;
	}
}
