import styled from 'styled-components';

export const StatictsContainer = styled.div`
	width: 83%;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
	margin: 15px 0 0;
	animation: top 0.6s ease-in-out;
`;

export const ChartContainer = styled.div`
	padding: 15px 30px;
	text-align: left;
	.recharts-wrapper {
		position: relative;
		left: -60px;
		margin: 20px 0;
	}
`;

export default {
	StatictsContainer,
	ChartContainer,
};
