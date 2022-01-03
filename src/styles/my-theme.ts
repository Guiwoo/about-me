// src/assets/styles/theme.ts
import { DefaultTheme } from "styled-components";

const dark: DefaultTheme = {
  fontColor: {
    main: "#fff",
  },
  bgColor:{
    main:"black",
    second:"#1e272e"
  },
  gradient: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )"
};

const light: DefaultTheme = {
  fontColor: {
    main: "#1e272e",
  },
  bgColor:{
    main:"#fff",
    second:"#"
  },
  gradient:"linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))"
};

export { dark, light };