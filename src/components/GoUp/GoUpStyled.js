import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const GoUpText = styled.span`
	font-size: 12.5px;
	color: #466a94;
	font-weight: bolder;
	opacity: 0.7;
`;

export const GoUpContainer = styled.div`
	position: fixed;
	left: 0;
	top: 48px;
	width: 100px;
	padding: 0 10px 0 5px;
	height: 100vh;
	cursor: pointer;
	display: ${props => (props.show ? 'block' : 'none')};
	animation: ${opacity} 0.5s ease;
	&:hover {
		background: #d6dae0;
		transition: all 0.3s;
	}
`;

export default {
	GoUpText,
	GoUpContainer,
};
