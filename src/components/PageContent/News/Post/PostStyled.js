import styled from 'styled-components';


export const PostContainer = styled.div`
    background: #fff;
    margin: 10px 0px 10px 10px;
    border-radius: 3px;
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
    padding: 30px 20px;
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

export const PostAuthor = styled.div`
    text-align: left;
    color: #2a5885;
    font-weight: 500;
    font-size: 14px;
`;

export const PostDate = styled.div`
    color: #939393;
    font-size: 12px;
    margin-top: 5px;
`;

export const PostImage = styled.div`
    width: 100%;
    height: 240px;
    background: #333;
`;

export const PostDescription = styled.div`
    padding: 10px 15px 11px;
    border: 1px solid rgba(0,0,0,.3);
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
    color: rgba(0,0,0,.7);
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
    PostDate,
    PostDescription,
    PostTitle,
    AuthorLink,
    PostHeader
}