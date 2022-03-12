import React from "react";
import {useLocation} from "react-router";
import {ThemeProvider} from "styled-components";
import LeftMain from "./components/Main/LeftMain";
import RightMain from "./components/Main/RightMain";
import {Container, Main} from "./components/Shared";
import {dark, light} from "./styles/my-theme";
import GlobalStyle from "./styles/resetCss";
import {extracText} from "./utils/hooks";
import {LangProvider} from "./utils/toggleLang";
import {useRecoilState} from "recoil";
import {darkState} from "./utils/recoilAtom";

const App = () => {
  const [isDark, _] = useRecoilState(darkState);
  const {pathname} = useLocation();
  document.title = `${extracText(pathname)} | Guiwoo's`;
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyle />
      <LangProvider>
        <Container>
          <Main>
            <LeftMain />
            <RightMain />
          </Main>
        </Container>
      </LangProvider>
    </ThemeProvider>
  );
};

export default App;
