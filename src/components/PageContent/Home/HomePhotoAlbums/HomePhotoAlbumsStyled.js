import styled from 'styled-components';

export const HomePhotoAlbumsContainer = styled.div`
	background: #fff;
	padding: 20px 15px 15px 15px;
	margin: 10px 10px 0px 0px;
	border-radius: 3px;
	box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;

export const ViewAlbumContainer = styled.div`
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

export const ViewAlbumContent = styled.div`
	animation: top 0.3s ease;
	width: 70%;
	min-height: 600px;
	background: #fff;
	margin: 5% auto;
	border-radius: 4px;
	position: relative;
`;

export const ViewAlbumTitle = styled.div`
	text-align: left;
	padding: 10px 30px;
	font-size: 14px;
	color: #fff;
	height: 54px;
	line-height: 54px;
	overflow: hidden;
	text-overflow: ellipsis;
	position: relative;
	white-space: nowrap;
	background-color: #f2f4f7;
	border-bottom: 1px solid #e7eaf0;
	border-radius: 4px 4px 0 0;
`;
export const ViewAlbumImages = styled.div`
	padding: 20px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
export const AlbumImage = styled.div`
	margin: 5px;
	width: 48%;
	height: 300px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;
export const ViewAlbumYears = styled.span`
	color: #333;
	font-size: 14px;
	margin-left: 20px;
`;
export const ViewAlbumAuthor = styled.a`
	color: #656565;
	font-size: 14px;
	font-weight: 400;
	&:hover {
		text-decoration: underline;
	}
`;

export const PhotosNumber = styled.p`
	font-size: 12px;
	padding-left: 10px;
	color: #777;
`;

export const PhotosTitle = styled.div`
	font-size: 12px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: #000;
`;

export const AlbumPreview = styled.div`
	position: relative;
	vertical-align: top;
	border-radius: 4px;
	max-width: 200px;
	margin-bottom: 10px;
	height: 132px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;
`;

export const AlbumPreviewOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
`;
export const AlbumPreviewInfo = styled.div`
	padding: 10px 15px;
	position: absolute;
	z-index: 2;
	bottom: 5px;
	display: flex;
	justify-content: space-between;
	width: 85%;
	transition: all 0.3s;
	transform: ${props => (props.show ? 'translateY(-15px)' : 'translateY(0px)')};
`;

export const AlbumDescription = styled.span`
	color: #fff;
	font-size: 12px;
	position: absolute;
	z-index: 2;
	bottom: 0;
	left: 9%;
	transition: all 0.3s;
	opacity: ${props => (props.show ? '1' : '0')};
	transform: ${props =>
		props.show ? 'translateY(-10px)' : 'translateY(20px)'};
`;
export const AlbumPreviewInfoTitle = styled.span`
	color: #fff;
	font-size: 14px;
	font-weight: bold;
`;

export const AlbumPreviewInfoNumber = styled.span`
	color: #fff;
	font-size: 14px;
	font-weight: bold;
`;

export default {
	HomePhotoAlbumsContainer,
	PhotosNumber,
	PhotosTitle,
	AlbumPreview,
	AlbumPreviewInfo,
	AlbumDescription,
	AlbumPreviewInfoTitle,
	AlbumPreviewInfoNumber,
	AlbumPreviewOverlay,
	ViewAlbumContainer,
	ViewAlbumTitle,
	ViewAlbumYears,
	ViewAlbumImages,
	AlbumImage,
};
