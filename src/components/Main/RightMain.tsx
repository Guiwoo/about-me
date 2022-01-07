import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import AboutMe from "../../screen/AboutMe";
import Home from "../../screen/Home";
import Projects from "../../screen/Projects";
import bg1 from "../../assets/img/bgBlack.png";

const SRightMain = styled.section`
  width: 80%;
  height: 100%;
  border-radius: 30px;
  background-position: center;
  background-repeat: none;
  background-size: cover;
  background-image: url(${bg1});
`;

/** Need to make 404 page or redirecting to home */
const NoMatch = () => <div>No</div>;
const Project1 = () => <h1>project1</h1>;
const Project2 = () => <h1>project2</h1>;

const RightMain = () => {
  return (
    <SRightMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="me" element={<AboutMe />} />
        <Route path="projects/" element={<Projects />}>
          <Route path="project1" element={<Project1 />} />
          <Route path="project2" element={<Project2 />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </SRightMain>
  );
};

export default RightMain;
