import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import { aws_address } from "../../utils/aws";
import { device } from "../../utils/resize";
import HeaderMenu from "../Project/HeaderMenu";

const SRightMain = styled.section`
  width: 80%;
  height: 100%;
  border-radius: 30px;
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 80%;
    background-position: center;
    background-repeat: none;
    background-size: cover;
    background-image: url(${aws_address.img.bg});
  }

  @media ${device.desktop} {
    width: 80%;
  }
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
