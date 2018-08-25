import styled from 'styled-components';


export const FreindsTitle = styled.div`
     font-size: 12px;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     color: #000;
`;

export const HomePreindsContainer = styled.div`
    background: #fff;
    padding: 20px 15px 15px 15px;
    margin: 0px 10px 0px 0px;
    border-radius: 3px;
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
`;

export const FreindsNumber = styled.p`
    font-size: 12px;
    padding-left: 10px;
    color: #777;
`;


export const FreindItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    .avatar {
        height: 50px;
        border-radius: 50%;
        width: 50px;
        background: #555;

    }
    p {
        font-size: 12px;
        color: #444;
        margin-top: 5px;
    }
`;

export const MyFreinds = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0 0 0;
    flex-wrap: wrap;
`;


export default {
    HomePreindsContainer,
    MyFreinds,
    FreindItem,
    FreindsNumber,
    FreindsTitle
}