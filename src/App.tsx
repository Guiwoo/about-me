import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import LeftMain from "./components/LeftMain";

const Container = styled.div`
  background-image: ${(props) => props.theme.gradient};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Main = styled.main`
  margin: auto;
  border: 1px solid "#1e272e";
  width: 85%;
  height: 83%;
  border-radius: 30px;
  background-color: ${(props) => props.theme.bgColor.second};
  display: flex;
`;
const RightMain = styled.section`
  width: 80%;
  height: 100%;
  border-radius: 30px;
  background-color: #546e7a;
`;

const TestHome = () => <div>Home</div>;
const TestMe = () => <div>Me</div>;
const TestPro = () => <div>Projects</div>;
const NoMatch = () => <div>No</div>;

const App = () => {
  return (
    <Container>
      <Main>
        <LeftMain></LeftMain>
        <RightMain>
          <Routes>
            <Route path="/" element={<TestHome />} />
            <Route path="me" element={<TestMe />} />
            <Route path="projects" element={<TestPro />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </RightMain>
      </Main>
    </Container>
  );
};

export default App;
