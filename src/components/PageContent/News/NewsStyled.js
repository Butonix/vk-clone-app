import styled from 'styled-components';

export const NewsContainer = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: flex-start;
`;

export const NewsLent = styled.div`
	width: 70%;
`;

export const NewsPhotoContainer = styled.div``;

export const NewsImage = styled.div`
	height: 300px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	margin: 10px 0px 10px 0px;
	border-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
	cursor: pointer;
`;

export default {
	NewsContainer,
	NewsLent,
	NewsPhotoContainer,
	NewsImage,
};
