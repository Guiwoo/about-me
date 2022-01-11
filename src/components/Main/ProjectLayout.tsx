import React from "react";
import { Outlet } from "react-router-dom";
import HeaderMenu from "../Project/HeaderMenu";

const ProjectsLayout = () => {
  return (
    <>
      <HeaderMenu />
      <Outlet />
    </>
  );
};

export default ProjectsLayout;
