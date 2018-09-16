import styled from 'styled-components';

export const PhotosContainer = styled.div`
	background: #fff;
	padding: 15px;
	margin: 10px 0 10px 10px;
	border-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;

export const PhotoItem = styled.a`
	width: 123px;
	height: 123px;
	margin: 3px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

export const MyPhots = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
`;

export default {
	PhotosContainer,
	PhotoItem,
	MyPhots,
};
