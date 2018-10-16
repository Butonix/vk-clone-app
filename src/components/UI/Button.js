import styled from 'styled-components';

export const Button = styled.div`
	padding: 7px 15px;
	margin: 0;
	font-size: 14px;
	display: inline-block;
	zoom: 1;
	cursor: pointer;
	white-space: nowrap;
	text-align: center;
	background-color: #5b88bd;
	color: #fff;
	border: 0;
	border-radius: 4px;
	margin: 0 7px;
`;

export const LightButton = styled(Button)`
	background-color: #e5ebf1;
	color: #55677d;
`;

export default {
	Button,
	LightButton,
};
