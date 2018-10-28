import styled from 'styled-components';

export const FriendsContainer = styled.div`
	width: 65%;
`;

export const FollowersContainer = styled.div`
	position: relative;
	background: #fff;
	border-radius: 2px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
	margin: 15px 0 0;
	animation: top 0.4s ease-in-out;
`;

export const FollowersTop = styled.div`
	background: #fafbfc;
	padding: 0 20px;
	height: 54px;
	line-height: 54px;
	border-bottom: 1px solid #e7e8ec;
	border-radius: 2px 2px 0 0;
	font-size: 16px;
	text-align: left;
`;

export const FollowersCount = styled.span`
	font-size: 14px;
	color: #939393;
	padding: 0 7px;
`;

export const Follower = styled.span`
	padding: 10px 20px;
	display: flex;
	justify-content: flex-start;
`;

export const FollowerPhoto = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-size: cover;
	background-position: center;
`;

export const FollowerInfo = styled.div`
	margin-left: 20px;
	text-align: left;
	padding-top: 5px;
`;

export const FollowerName = styled.h4`
	font-size: 14px;
	color: #2a5885;
	margin-bottom: 15px;
	font-weight: 700;
`;

export const SwitchFriendsContainer = styled.div`
	border-radius: 2px 2px 0 0;
	background-color: #fff;
	border-bottom: 1px solid #e7e8ec;
	padding: 0 20px;
	display: flex;
	justify-content: flex-start;
	margin-top: 15px;
`;

export const ChoiceSwitch = styled.div`
	border-bottom: ${props => (props.lineShow ? '2px solid #5181b8' : '')};
	padding: 18px 0;
	margin-left: 20px;
	font-size: 14px;
	cursor: pointer;
	color: #656565;
	&:first-child {
		margin-left: 0px;
	}
`;

export const FriendsSearchContainer = styled.div`
	border-bottom: 1px solid #e7e8ec;
	background-color: #fff;
	display: flex;
	justify-content: flex-start;
	padding: 0 20px;
	animation: top 0.4s ease-in-out;
	align-items: center;
	position: relative;
`;

export const FriendsSearchField = styled.input`
	padding-left: 28px;
	font-size: 14px;
	padding: 20px 44px 20px 14px;
	border: none;
	outline: none;
	color: #656565;
	opacity: 0.7;
	width: 70%;
	&::placeholder {
		color: #656565;
		opacity: 0.7;
	}
`;

export const FriendItemContainer = styled.div`
	background: #fff;
	border-top: 1px solid #e7e8ec;
	padding: 12px 25px;
	display: flex;
	justify-content: flex-start;
	animation: top 0.4s ease-in-out;
	&:first-child {
		border-top: 0;
	}
`;

export const FriendItemPhoto = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const FriendItemInfo = styled.div`
	margin-left: 20px;
	text-align: left;
`;

export const FriendName = styled.h3`
	color: #2a5885;
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 8px;
`;

export const ParametersSearchContainer = styled.div`
	background: #ffff;
	border: 1px solid #c5d0db;
	padding: 20px 16px;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	position: absolute;
	right: 0;
	top: 40px;
	display: ${props => (props.show ? 'block' : 'none')};
	width: 200px;
	text-align: left;
`;

export const SearchLabel = styled.div`
	font-size: 12px;
	color: #000;
	margin: 10px 0;
	font-weight: bold;
`;

export const ChoiceCity = styled.select`
	width: 100%;
	padding: 5px 0;
	border: 1px solid #d3d9de;
	outline: none;
	font-size: 14px;
`;

export const ChoiceItem = styled.option`
	background: #fff;
	padding: 10px 0;
	font-size: 12px;
	color: #333;
	&:hover {
		background: #d3d9de;
		transition: all 0.3s;
	}
`;

export const ChoiceAge = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ChoiceAgeFrom = styled.select`
	margin: 0 3px;
`;

export const ChoiceAgeTo = styled.select`
	margin: 0 3px;
`;

export const ChoiceAgeOption = styled.option`
	background: #fff;
	padding: 10px 0;
	font-size: 12px;
	color: #333;
	&:hover {
		background: #d3d9de;
		transition: all 0.3s;
	}
`;

export const ChoiceSex = styled.div`
	padding-top: 10px;
`;

export const ChoiceSexText = styled.span`
	font-size: 12px;
	color: #444;
	margin-left: 5px;
`;

export const ChoiceSexRadio = styled.input``;

export const ChoiceSexLabel = styled.label`
	cursor: pointer;
	display: block;
	width: 100%;
	padding: 5px 0;
`;

export default {
	FriendsContainer,
	FollowersContainer,
	FollowersTop,
	FollowersCount,
	Follower,
	FollowerPhoto,
	FollowerInfo,
	FollowerName,
	SwitchFriendsContainer,
	ChoiceSwitch,
	FriendsSearchContainer,
	FriendsSearchField,
	FriendItemContainer,
	FriendItemPhoto,
	FriendItemInfo,
	FriendName,
	ParametersSearchContainer,
	SearchLabel,
	ChoiceCity,
	ChoiceItem,
	ChoiceAge,
	ChoiceAgeFrom,
	ChoiceAgeTo,
	ChoiceAgeOption,
	ChoiceSex,
	ChoiceSexText,
	ChoiceSexRadio,
	ChoiceSexLabel,
};
