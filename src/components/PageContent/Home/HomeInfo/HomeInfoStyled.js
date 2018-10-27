import styled from 'styled-components';

// HomeInfo styled

export const HomeInfoContainer = styled.div`
	background: #fff;
	padding: 10px 20px;
	margin: 10px 0 10px 10px;
	border-radius: 3px;
	text-align: left;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;

export const NameTitle = styled.h3`
	font-size: 19px;
	line-height: 1.5em;
	color: #222;
	display: flex;
	justify-content: space-between;
`;

export const ProfileStatus = styled.p`
	font-size: 12px;
	color: #222;
	opacity: 0.7;
	line-height: 1.5em;
	padding-bottom: 10px;
	border-bottom: 1px solid #dfe6ed;
`;

export const CheckOnline = styled.span`
	font-size: 12px;
	color: #000;
	opacity: 0.4;
`;

export const InformationContainer = styled.div`
	margin-top: 10px;
`;

export const Information = styled.div`
	padding-top: 10px;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const LeftColumn = styled.div`
	font-size: 13px;
	color: #444;
	width: 40%;
`;

export const RightColumn = styled.span`
	width: 80%;
	font-size: 13px;
	margin-left: 5%;

	a {
		color: #2a5885;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const MoreInfo = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	width: 100%;
	padding: 10px 0;
	cursor: pointer;
	a {
		text-decoration: none;
		&:hover {
			text-decoration: none;
		}
	}
	div {
		padding-top: 0;
	}
	&:hover {
		background: #f0f2f5;
		transition: all 0.3s;
	}
`;

export const MoreInfoBlock = styled.div`
	animation: opacity 0.3s ease;
	padding: 20px 0;
`;

export const InfoTitle = styled.div`
  font-size: 14px;
  position: relative;
  margin: 20px 0;
  b {
    color: #000
    background: #fff;
    padding: 5px 10px 5px 0;
    position: relative;
    z-index: 2;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    right 0;
    top: 10px;
    height: 1px;
    background: #777;
    opacity: .7;
  }
`;

export const Numbers = styled.div`
	padding-top: 10px;
	border-top: 1px solid #dfe6ed;
	display: flex;
	justify-content: space-between;
`;

export const NumberItem = styled.a`
	text-decoration: none;
	width: 20%;
	padding: 10px;
	align-content: center;
	text-align: center;
	a {
		text-decoration: none;
	}
`;

export const Number = styled.div`
	font-size: 19px;
	color: #42648b;
	padding-bottom: 3px;
	line-height: 21px;
`;

export const ItemDescription = styled.div`
	font-size: 13px;
	color: #828282;
	font-weight: normal;
	margin: 3px 0;
	&:hover {
		color: #42648b;
	}
`;

export default {
	HomeInfoContainer,
	NameTitle,
	ProfileStatus,
	CheckOnline,
	InformationContainer,
	Information,
	LeftColumn,
	RightColumn,
	MoreInfo,
	MoreInfoBlock,
	InfoTitle,
	Numbers,
	NumberItem,
	Number,
	ItemDescription,
};
