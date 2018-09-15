import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";


export const AppContent = styled.div`
  padding: 60px 0;
`;


export const GlobalStyle = createGlobalStyle`
  body {
      overflow: hidden;
  }
`;

export default  {
    AppContent,
    GlobalStyle
}