import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const AppContent = styled.div`
	padding: 60px 0;
`;

export const GlobalStyle = createGlobalStyle`
  body {
      overflow: ${props => (props.overflow ? 'auto' : 'hidden')};
  }
`;


export const PageHeaderBlock = styled.div`
    display: block;
    height: 54px;
    line-height: 54px;
    font-size: 16px;
    color: rgb(0, 0, 0);
    background: rgb(250, 251, 252);
    padding: 0px 20px;
    border-bottom: 1px solid rgb(231, 232, 236);
    border-radius: 2px 2px 0px 0px;
    width: 100%;

`;



export default {
	AppContent,
  GlobalStyle,
  PageHeaderBlock
};
