import styled from 'styled-components';

export const PhotosContainer = styled.div`
	background: #fff;
	padding: 15px;
	margin: 10px 0 10px 10px;
	border-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;

export const PhotoItem = styled.div`
	width: 123px;
	height: 123px;
	margin: 3px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;
`;

export const MyPhots = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
`;

export const CarouselContainer = styled.div`
	background: rgba(0, 0, 0, 0.7);
	display: ${props => (props.show ? 'block' : 'none')};
	position: fixed;
	overflow: auto;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 6;
`;

export const CarouselContent = styled.div`
	overflow: hidden;
	background: #fff;
	animation: top 0.3s ease;
	width: 80%;
	min-height: 600px;
	background: #fff;
	margin: 20px auto;
	border-radius: 4px;
	position: relative;
	display: flex;
	justify-content: space-between;
`;

export const LeftPhoto = styled.div`
	width: 70%;
	min-height: 100%;
	background: #333;
	position: relative;
`;

export const BottomPanel = styled.div`
	box-sizing: border-box;
	width: 100%;
	min-height: 50px;
	background: #333;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	align-items: center;
`;

export const BottomPanelYear = styled.span`
	color: #fff;
	opacity: 0.7;
	font-size: 14px;
	line-height: 1.5em;
	margin-right: 10px;
`;

export const BottomPanelCount = styled.span`
	color: #fff;
	opacity: 0.7;
	font-size: 14px;
	line-height: 1.5em;
	margin-right: 10px;
`;

export const BottomPanelLinks = styled.span``;

export const PanelLink = styled.a`
	color: #fff;
	opacity: 0.7;
	font-size: 14px;
	line-height: 1.5em;
	padding-left: 10px;
	&:first-child {
		padding-left: 0;
	}
`;

export const RightContent = styled.div`
	width: 30%;
	min-height: 100%;
`;

export const CurrentImage = styled.div`
	background-size: cover;
	width: 60%;
	min-height: 100%;
	margin: 0 auto;
	background-position: center;
`;

export default {
	CarouselContent,
	CarouselContainer,
	PhotosContainer,
	PhotoItem,
	MyPhots,
	LeftPhoto,
	RightContent,
	CurrentImage,
	BottomPanel,
	BottomPanelYear,
	BottomPanelCount,
	BottomPanelLinks,
	PanelLink,
};
