import  styled  from 'styled-components';

export const PagePaginationContainer = styled.div`
    position: relative;
    border-radius: 2px;
    display: flex;
    align-items: center;

`;


export const NavigationLink = styled.a`
    color: #656565;
`;


export const NavigationLinkActive = styled(NavigationLink)`
    color: #000;
`;

export default {
    PagePaginationContainer,
    NavigationLink,
    NavigationLinkActive
}