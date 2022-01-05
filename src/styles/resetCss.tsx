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
  button{
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    color:${(props) => props.theme.fontColor.main};
    background-color: transparent;
  }
  .hidden{
    opacity: 0;
  }
  .fadeIn{
    transition: 0.3s all linear;
    opacity:1;
  }
`;

export default GlobalStyle;
