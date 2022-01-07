import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMe from "../../screen/AboutMe";
import Home from "../../screen/Home";
import routeName from "../../routeName";
import { GoNext } from "../Shared";
import ProjectsLayout from "../Project/ProjectsLayout";
import MainLayOut from "./MainLayOut";

/** Need to make 404 page or redirecting to home */
const NoMatch = () => <div>No</div>;
const Project1 = () => <h1>project1</h1>;
const Project2 = () => <h1>project2</h1>;
const Now = () => <h1>home</h1>;

const RightMain = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="me" element={<AboutMe />} />
          <Route path="projects/" element={<ProjectsLayout />}>
            <Route index element={<Now />} />
            <Route path="1" element={<Project1 />} />
            <Route path="2" element={<Project2 />} />
          </Route>
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
    </>
  );
};

export default RightMain;
