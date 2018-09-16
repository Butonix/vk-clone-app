import styled from 'styled-components';

export const HomeGroupsContainer = styled.div`
	background: #fff;
	padding: 20px 15px 15px 15px;
	margin: 10px 10px 0px 0px;
	border-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;

export const GroupsTitle = styled.div`
	font-size: 12px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: #000;
`;

export const GroupsNumber = styled.p`
	font-size: 12px;
	padding-left: 10px;
	color: #777;
`;

export const GroupItemContainer = styled.div`
	display: flex;
	padding: 10px 0;
	align-items: center;
	justify-content: space-between;
`;

export const ItemImage = styled.div`
	width: 22%;
	height: 40px;
	background: #333;
	border-radius: 50%;
`;

export const ItemInfo = styled.div`
	width: 88%;
`;

export const ItemInfoTitle = styled.div`
	color: #2a5885;
	font-size: 13px;
	text-align: left;
	padding: 0px 0 0 10px;
`;

export const ItemInfoDescription = styled.div`
	font-size: 12px;
	max-height: 48px;
	overflow: hidden;
	color: #656565;
	text-align: left;
	padding: 5px 0 0 10px;
`;

export default {
	HomeGroupsContainer,
	GroupItemContainer,
	ItemImage,
	ItemInfo,
	ItemInfoTitle,
	ItemInfoDescription,
	GroupsTitle,
	GroupsNumber,
};
