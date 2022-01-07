import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import AboutMe from "../../screen/AboutMe";
import Home from "../../screen/Home";
import Projects from "../../screen/Projects";
import bg1 from "../../assets/img/bgBlack.png";
import routeName from "../../routeName";
import { GoNext } from "../Shared";

const SRightMain = styled.section`
  justify-content: center;
  width: 80%;
  height: 100%;
  border-radius: 30px;
  background-position: center;
  background-repeat: none;
  background-size: cover;
  background-image: url(${bg1});
  display: flex;
  justify-content: space-between;
`;

/** Need to make 404 page or redirecting to home */
const NoMatch = () => <div>No</div>;
const Project1 = () => <h1>project1</h1>;
const Project2 = () => <h1>project2</h1>;

const RightMain = () => {
  const { pathname } = useLocation();
  return (
    <>
      <SRightMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="me" element={<AboutMe />} />
          <Route path="projects/" element={<Projects />}>
            <Route path="1" element={<Project1 />} />
            <Route path="2" element={<Project2 />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        {pathname !== routeName.projects ? (
          pathname === routeName.home ? (
            <GoNext routeName={routeName.me} title={"About Me"} />
          ) : (
            <GoNext routeName={routeName.projects} title={"Projects"} />
          )
        ) : null}
      </SRightMain>
    </>
  );
};

export default RightMain;
