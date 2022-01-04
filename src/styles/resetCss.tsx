import * as React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:${(props) => props.theme.fontColor.main};
    background-color: ${(props) => props.theme.bgColor.main};
    box-sizing: border-box;
  }
  a{
    color:${(props) => props.theme.fontColor.main};
    text-decoration: none;
  }
`;

export default GlobalStyle;
