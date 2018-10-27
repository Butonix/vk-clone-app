import styled from 'styled-components';

export const RightMenuContainer = styled.div`
	box-shadow: rgb(215, 216, 219) 0px 1px 0px 0px,
		rgb(227, 228, 232) 0px 0px 0px 1px;
	background: rgb(255, 255, 255);
	border-radius: 2px;
	width: 28%;
	margin-top: 10px;
	height: auto;
`;

export const RightMenuList = styled.ul`
	text-align: left;
	a {
		text-decoration: none;
	}
`;

export const RightMenuListItem = styled.li`
	a {
		text-decoration: none;
		color: #2a5885;
	}
	padding: 3px 0 3px 18px;
	border-left: ${props => (props.active ? '3px solid #5181b8' : '')};
	background-color: ${props => (props.active ? '#f0f2f5' : '')};
	font-size: 14px;
	line-height: 2.3;
	margin: 5px 0;
	cursor: pointer;
	color: #2a5885;
	&:hover {
		background-color: #f0f2f5;
		transition: all 0.3s;
	}
`;

export const RightMenuNestedList = styled.ul`
	display: ${props => (props.show ? 'block' : 'none')};
	li {
		padding: 0px 5px 0px 28px;
		color: #656565;
	}
`;

export default {
	RightMenuContainer,
	RightMenuNestedList,
	RightMenuList,
	RightMenuListItem,
};
