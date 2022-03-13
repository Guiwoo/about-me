// src/assets/styles/theme.ts
import { DefaultTheme } from "styled-components";

const dark: DefaultTheme = {
  fontColor: {
    main: "#fff",
    sub: "",
    projectsSub: "#05c46b"
  },
  bgColor: {
    main: "black",
    second: "#1e272e"
  },
  border: {
    main: "#1e272e"
  },
  underline: {
    main: "#ffa801"
  },
  gradient: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )"
};

const light: DefaultTheme = {
  fontColor: {
    main: "#1e272e",
    sub: "#485460",
    projectsSub: "#3c40c6",
  },
  bgColor: {
    main: "#fff",
    second: "#f5a499"
  },
  border: {
    main: "#fff"
  },
  underline: {
    main: "white"
  },
  gradient: "linear-gradient(90deg, rgba(255,232,228,1) 0%, rgba(245,164,153,1) 100%);"
};

export { dark, light };