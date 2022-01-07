import React from "react";
import { Link, Outlet, Route } from "react-router-dom";
import styled from "styled-components";
import { BgContainer } from "../components/Shared";

const Container = styled(BgContainer)`
  display: flex;
  position: relative;
`;

const Projects = () => {
  return (
    <>
      <div>Navigation Page with Burger Menu</div>
      <Outlet />
    </>
  );
};

export default Projects;
