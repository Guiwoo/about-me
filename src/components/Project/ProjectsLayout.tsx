import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

const Project1 = () => <h1>project1</h1>;
const Project2 = () => <h1>project2</h1>;

const ProjectsLayout = () => {
  return (
    <>
      <HeaderMenu />
      <Outlet />
    </>
  );
};

export default ProjectsLayout;
