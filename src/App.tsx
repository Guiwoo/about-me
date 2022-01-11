import React from "react";
import LeftMain from "./components/Main/LeftMain";
import RightMain from "./components/Main/RightMain";
import { Container, Main } from "./components/Shared";
import { LangProvider } from "./utils/toggleLang";

const App = () => {
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
