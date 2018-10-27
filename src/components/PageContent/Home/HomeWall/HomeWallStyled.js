import styled from 'styled-components';

export const ChoiceWallLinks = styled.div``;

export const PositionSearch = styled.div`
	width: 100%;
`;

export const WallSearch = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	animation: top 0.4s ease-in-out;
	background: #fff;
	border-top-right-radius: 3px;
	border-top-left-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
	padding: 15px 15px 10px 15px;
	margin: 10px 0px 0 10px;
	height: 32px;
`;

export const SearchWallContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	animation: top 0.4s ease-in-out;
	background: #fff;
	border-top-right-radius: 3px;
	border-top-left-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
	padding: 15px 15px 10px 15px;
	margin: 10px 0px 0 10px;
	height: 32px;
`;

export const WallSearchInput = styled.input`
	border: none;
	outline: none;
	width: 80%;
	color: #888;
	&::placeholder {
		color: #888;
		transition: all 0.3s;
	}
`;

export const ChoiceWallLink = styled.a`
	border-bottom: ${props => (props.lineShow ? '2px solid #5181b8' : '')};
	padding-bottom: 22px;
	padding-top: 10px;
	margin-left: 20px;
	font-size: 14px;
	color: #656565;
	&:first-child {
		margin-left: 0px;
	}
`;

export const SearchWallIcon = styled.div`
	padding-bottom: 10px;
	box-sizing: border-box;
`;

export const PostProfile = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const PostChange = styled.div`
	text-align: right;
	padding-right: 5px;
	position: relative;
`;

export const Post = styled.div`
	animation: top 0.4s ease-in-out;
	background: #fff;
	margin: 10px 0px 10px 10px;
	border-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
	padding: 10px 15px 5px 15px;
	&:first-child {
		margin-top: 0;
	}
`;

export const PostTitle = styled.div`
	display: flex;
	margin-bottom: 10px;
	justify-content: space-between;
	align-items: center;
	span {
		color: #2a5885;
		text-decoration: none;
		cursor: pointer;
		font-size: 12px;
		font-weight: bold;
		margin-left: 10px;
	}
`;

export const PostContent = styled.div`
	text-align: left;
	padding: 10px 10px 10px;
	margin-bottom: 10px;

	p {
		font-size: 14px;
		line-height: 1.5em;
		color: #555;
	}
`;

export const PostChangeContent = styled.div`
	opacity: ${props => (props.show ? '1' : '0')};
	position: absolute;
	min-width: 180px;
	max-width: 250px;
	top: 30px;
	right: 20px;
	background: #fff;
	z-index: 5;
	border: 1px solid #c5d0db;
	padding: 4px 0;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	&:before {
		background: #fff;
		position: absolute;
		pointer-events: none;
		border: solid transparent;
		content: '';
		height: 0;
		width: 0;
		bottom: 100%;
		right: 15px;
		border-width: 6px;
		margin: 0 -6px;
		border-bottom-color: #c5d0db;
	}
`;

export const PostChangeLink = styled.a`
	font-size: 12px;
	color: #2a5885;
	padding: 10px 10px;
	cursor: pointer;
	text-align: left;
	position: relative;

	&:hover {
		background: #e4eaf0;
		transition: all 0.3s;
	}
`;

export const PostSettings = styled.div`
	padding: 10px 0;
	border-top: 1px solid #e7e8ec;
	display: flex;
	justify-content: flex-start;
`;

export const WallContainer = styled.div`
	border-radius: 3px;
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
export default {
	WallProfile,
	WallContainer,
	Post,
	PostTitle,
	PostContent,
	PostSettings,
	PostProfile,
	PostChange,
	PostChangeContent,
	PostChangeLink,
	SearchWallContainer,
	ChoiceWallLinks,
	ChoiceWallLink,
	SearchWallIcon,
	WallSearch,
	WallSearchInput,
	PositionSearch,
};
