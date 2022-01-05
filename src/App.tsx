import React from "react";
import styled from "styled-components";
import LeftMain from "./components/Main/LeftMain";
import RightMain from "./components/Main/RightMain";
import { Container, Main } from "./components/Shared";

const App = () => {
  return (
    <Container>
      <Main>
        <LeftMain />
        <RightMain />
      </Main>
    </Container>
  );
};

export default App;
