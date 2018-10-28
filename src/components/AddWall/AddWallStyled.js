import styled, { keyframes } from 'styled-components';

export const HomeWallContainer = styled.div`
	background: #fff;
	margin: 10px 0px 10px 0px;
	border-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;

export const WallProfile = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin: 5px;
	background: url(${props => props.back});
	background-size: cover;
	background-position: center;
`;

export const WallAddText = styled.textarea`
	white-space: nowrap;
	resize: none;
	height: auto;
	border: none;
	outline: none;
	margin-left: 10px;
	font-size: ${props => (props.textSize ? '24px' : '14px')};
	font-weight: 100;
	color: #333;
	width: 70%;
	padding: 10px 0 0 0;
	&::-webkit-input-placeholder {
		font-weight: 100;
		color: #777;
		opacity: 0.7;
	}
`;

export const AddPanel = styled.div`
	animation: top 0.4s ease-in-out;
	align-items: center;
	display: flex;
	justify-content: space-between;
	background: #fafbfc;
	border-top: 1px solid #e7e8ec;
	border-radius: 0 0 2px 2px;
	padding: 10px 15px 10px 15px;
`;

export const SendAdd = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const AddTitle = styled.div`
	padding: 10px 10px 5px 10px;
	display: flex;
`;

export const AddIconsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 20%;
`;

export const AddSmileContainer = styled.div`
	animation: opacity 0.4s ease;
	display: flex;
	justify-content: flex-end;
	width: 20%;
`;

export default {
	HomeWallContainer,
	AddSmileContainer,
	AddIconsContainer,
	WallProfile,
	WallAddText,
	AddPanel,
	AddTitle,
	SendAdd,
};
