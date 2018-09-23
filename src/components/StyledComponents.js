import styled from 'styled-components';

export const Container = styled.div`
	max-width: 990px;
	margin: 0 auto;
	padding: 0 15px;
	overflow: hidden;
	display: flex;
`;
export const ProfileIcon = styled.div`
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	background: #333;
	background: url('/images/profile.jpg');
	background-size: cover;
	background-position: center;
	border-radius: 50%;
	margin: 10px 0;
`;

export default {
	Container,
};
