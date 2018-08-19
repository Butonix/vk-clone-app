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
    img {
        width: 100%;
    }
`;

export default {
    HomeContainer,
    ProfileContainer
}