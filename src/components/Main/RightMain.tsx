import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import AboutMe from "../../screen/AboutMe";
import Home from "../../screen/Home";

const SRightMain = styled.section`
  width: 80%;
  height: 100%;
  border-radius: 30px;
  background-color: #546e7a; /* need to fixed color for light version */
`;

const TestPro = () => <div>Projects</div>;
const NoMatch = () => <div>No</div>;

const RightMain = () => {
  return (
    <SRightMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="me" element={<AboutMe />} />
        <Route path="projects" element={<TestPro />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </SRightMain>
  );
};

export default RightMain;
