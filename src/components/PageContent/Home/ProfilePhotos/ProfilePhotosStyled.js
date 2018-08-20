import styled from 'styled-components';




export const PhotosContainer = styled.div`
    background: #fff;
    padding: 20px;
    margin: 10px 0 10px 10px;
    border-radius: 3px;
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;

export const PhotosTitle = styled.div`
    display: flex;
    justify-content: space-between;
    span {
        font-size: 13px;
        color: #555;
    }
`;


export const MapLink = styled.a`
    font-size: 13px;
    color: #939393;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const PhotoItem = styled.a`
    width: 123px;
    height: 123px;
    margin: 3px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`;

export const MyPhots = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
`;

export default {
    PhotosContainer,
    PhotosTitle,
    MapLink,
    PhotoItem,
    MyPhots
}