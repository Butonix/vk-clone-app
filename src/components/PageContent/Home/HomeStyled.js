import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 83%;
`;

export const ProfileContainer = styled.div`
    background: #fff;
    padding: 15px;
    margin: 10px 10px 10px 0;
    border-radius: 3px;
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
    img {
        width: 100%;
    }
`;

export const LeftColum = styled.div`
    width: 30%;
`;

export const RightColumn = styled.div`
  width: 70%;
`;

export default {
    HomeContainer,
    ProfileContainer
}