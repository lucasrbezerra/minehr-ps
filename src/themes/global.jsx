import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  .css-3bmhjh-MuiPaper-root-MuiPopover-paper {
    background-color: ${(props) => props.theme.colors.background} !important;
  }
`;
