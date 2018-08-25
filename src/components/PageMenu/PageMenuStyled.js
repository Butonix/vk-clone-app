import styled from 'styled-components';


export const ListContainer = styled.ul``;


export const PageMenuContainer = styled.div`
    width: 17%;
`


export const LinkTo = styled.a`
  color: #4a76a8;
  text-decoration: none;
  padding-left: 10px;
  font-size: 14px;
  opacity: .8;
  &:hover {
      opacity: 1;
  }
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  &:first-child {
    padding-top: 0;
  }
`;



export default {
    ListContainer,
    PageMenuContainer,
    LinkTo,
    List
}