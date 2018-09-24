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
	animation: top 0.4s ease;
	width: 60%;
	min-height: 95vh;
	background: #fff;
	margin: 20px auto;
	border-radius: 4px;
	position: relative;
	display: flex;
	justify-content: space-between;
`;

export const LeftPhoto = styled.div`
	width: 65%;
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
	width: 35%;
	min-height: 100%;
`;

export const CurrentImage = styled.div`
	background-size: cover;
	width: 100%;
	min-height: 100%;
	margin: 0 auto;
	background-position: center;
`;

export const PhotoInfo = styled.div`
	position: relative;
	height: 100%;
`;

export const PhotoInfoTop = styled.div`
	padding: 10px 20px 10px 10px;
	background-color: #fafbfc;
	white-space: nowrap;
	border-bottom: 1px solid #e7e8ec;
	display: flex;
	align-items: center;
`;
export const AuthorInfo = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 15px;
`;

export const PhotoInfoProfileName = styled.a`
	color: #2a5885;
	text-decoration: none;
	font-weight: normal;
	cursor: pointer;
	padding-bottom: 5px;
`;

export const PhotoDate = styled.span`
	color: #939699;
	font-size: 12px;
	font-weight: 100;
`;

export const SocialIcons = styled.div`
	padding: 10px 30px 10px 20px;
	text-align: left;
`;

export const PhotoComments = styled.div`
	padding-bottom: 10px;
	border-top: 1px solid rgba(0, 0, 0, 0.2);
	position: absolute;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
`; 

export const AddComment = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	padding: 0 10px;
`;

export const PhotoCommentField = styled.input`
	border: none;
	outline: none;
	background: transparent;
	margin-left: 10px;
	font-size: 14px;
	opacity: 0.7;
	&::placeholder {
		font-size: 14px;
		opacity: 0.7;
	}
`;

export const PhotoCommentHidden = styled.div`
	display: ${props => props.show ? 'block' : 'none' };
	box-sizing: border-box;
	padding: 35px 10px 0 10px;
	text-align: right;
	animation: opacity 0.4s ease-in;
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
	PhotoInfo,
	PhotoInfoTop,
	PhotoInfoProfileName,
	AuthorInfo,
	PhotoDate,
	SocialIcons,
	PhotoComments,
	PhotoCommentField,
	PhotoCommentHidden,
	AddComment
};
