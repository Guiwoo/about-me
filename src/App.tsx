import React from "react";
import { useLocation } from "react-router";
import LeftMain from "./components/Main/LeftMain";
import RightMain from "./components/Main/RightMain";
import { Container, Main } from "./components/Shared";
import { extracText } from "./utils/hooks";
import { LangProvider } from "./utils/toggleLang";

const App = () => {
  const { pathname } = useLocation();
  document.title = `${extracText(pathname)} | Guiwoo's`;
  return (
    <LangProvider>
      <Container>
        <Main>
          <LeftMain />
          <RightMain />
        </Main>
      </Container>
    </LangProvider>
  );
};

export default App;
