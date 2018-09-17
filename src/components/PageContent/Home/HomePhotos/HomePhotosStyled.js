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
	margin: 5% auto;
	border-radius: 4px;
	position: relative;
	display: flex;
	justify-content: space-between;
`;

export const LeftPhoto = styled.div`
	width: 70%;
	min-height: 100%;
	background: rgba(0, 0, 0, 0.9);
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
};
