import styled from 'styled-components';

export const ListContainer = styled.ul`
	margin-top: 20px;
`;

export const PageMenuContainer = styled.div`
	width: 17%;
`;

export const LinkTo = styled.a`
	color: #4a76a8;
	text-decoration: none;
	padding-left: 10px;
	font-size: 14px;
	opacity: 0.8;
	&:hover {
		opacity: 1;
	}
`;

export const List = styled.li`
	text-align: left;
	padding: 5px 0;
	span {
		vertical-align: text-bottom;
	}
	a {
		color: #285473;
		text-decoration: none;
		font-size: 14px;
		opacity: 0.8;
		width: 100%;
		line-height: 1.5;
		padding: 3px 0;
	}
	&:first-child {
		padding-top: 0;
	}
`;

export default {
	ListContainer,
	PageMenuContainer,
	LinkTo,
	List,
};
