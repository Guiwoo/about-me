import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import { aws_address } from "../../aws";
import HeaderMenu from "../Project/HeaderMenu";

const SRightMain = styled.section`
  width: 80%;
  height: 100%;
  border-radius: 30px;
  background-position: center;
  background-repeat: none;
  background-size: cover;
  background-image: url(${aws_address.img.bg});
`;

export const MainLayOut = () => {
  return (
    <SRightMain>
      <Outlet />
    </SRightMain>
  );
};

export const ProjectsLayout = () => {
  return (
    <>
      <HeaderMenu />
      <Outlet />
    </>
  );
};
