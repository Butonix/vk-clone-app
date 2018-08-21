import styled from 'styled-components';


export const HomePreindsContainer = styled.div`
    background: #fff;
    padding: 15px;
    margin: 10px 10px 10px 0px;
    border-radius: 3px;
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;


export const FreindItem = styled.div`
    width: 50px;
    border-radius: 50%;
    background: #333;
    height: 50px;
`;

export const MyFreinds = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
`;


export default {
    HomePreindsContainer,
    MyFreinds,
    FreindItem
}