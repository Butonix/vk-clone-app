import styled from 'styled-components';

export const ImageContainer = styled.div`
	width: 200px;
	height: 200px;
	overflow: hidden;
	background: url('images/profile.jpg');
	background-size: cover;
	background-position: center;
`;

export const ChangeButton = styled.button`
	background: #e5ebf1;
	border: none;
	color: #55677d;
	font-size: 13px;
	font-weight: normal;
	padding: 6px 70px;
	border-radius: 4px;
`;

export const StaticButton = styled.div`
	background: #e5ebf1;
	border-radius: 3px;
`;

export const ChangeInfoContainer = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
`;

export default {
	ImageContainer,
	ChangeButton,
	StaticButton,
	ChangeInfoContainer,
};
