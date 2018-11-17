import styled, { keyframes } from 'styled-components';


export const spinner = keyframes`
    to { transform: rotate(360deg); }
`;
export const Loaded = styled.div`
	position: relative;
	width: 100%;
	padding: 20px 0;
	&:before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		top: 40%;
		left: 45%;
		width: 65px;
		height: 65px;
		margin-top: -15px;
		margin-left: -15px;
		border-radius: 50%;
		border: 1px solid #ccc;
		border-top-color: #07d;
		animation: ${spinner} 0.8s linear infinite;
	}
`;

export default {
    spinner,
    Loaded
}