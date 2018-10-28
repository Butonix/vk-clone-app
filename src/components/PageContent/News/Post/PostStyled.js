import styled from 'styled-components';

export const PostContainer = styled.div`
	background: #fff;
	margin: 10px 0px 10px 0px;
	border-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
	padding: 20px 20px 30px 20px;
	animation: top 0.4s ease-in-out;
`;

export const PostAuthorImage = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	overflow: hidden;
	background: #e3e4e8;
`;

export const PostTop = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 0 0 15px 0;
`;

export const PostText = styled.p`
	font-size: 14px;
	color: #333;
	line-height: 1.5em;
	text-align: left;
	margin: 0 0 10px 0;
`;

export const PostAuthor = styled.div`
	text-align: left;
	color: #2a5885;
	font-weight: 500;
	font-size: 14px;
`;

export const PostImage = styled.div`
	width: 100%;
	height: 240px;
	background-size: cover;
	background-position: center;
	border-radius: 2px;
	box-shadow: 0 0 0 1px inset rgba(0, 0, 0, 0.3);
`;

export const PostDescription = styled.div`
	padding: 20px 15px 20px 15px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 2px;
	text-align: left;
`;

export const PostHeader = styled.div`
	padding-left: 20px;
	text-align: left;
	padding-top: 5px;
`;

export const PostTitle = styled.h3`
	font-size: 14px;
	line-height: 21px;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.7);
`;

export const AuthorLink = styled.a`
	margin-top: 10px;
	text-decoration: none;
	font-size: 12px;
	color: #999;
`;

export default {
	PostContainer,
	PostAuthorImage,
	PostAuthor,
	PostTop,
	PostImage,
	PostDescription,
	PostTitle,
	AuthorLink,
	PostHeader,
	PostText,
};
