import React from "react";
import {Outlet} from "react-router";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {aws_address} from "../../utils/aws";
import {darkState} from "../../utils/recoilAtom";
import {device} from "../../utils/resize";
import HeaderMenu from "../Project/HeaderMenu";

const SRightMain = styled.section<{isDark: boolean}>`
  width: 80%;
  height: 100%;
  border-radius: 30px;
  @media ${device.mobile} {
    width: 100%;
    padding: 50px 0px;
  }
  @media ${device.laptop} {
    width: 80%;
    background-position: center;
    background-repeat: none;
    background-size: cover;
    padding: 0px;
    ${(props) =>
      props.isDark
        ? `background-image:url(${aws_address.img.bg})`
        : `background-image:url(${aws_address.img.pinkBg})`}
  }

  @media ${device.desktop} {
    width: 80%;
    padding: 0px;
  }
`;

export const MainLayOut = () => {
  //@ts-ignore
  const [isDark, _] = useRecoilState(darkState);
  return (
    <SRightMain isDark={isDark}>
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
