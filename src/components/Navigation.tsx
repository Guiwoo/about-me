import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { device } from "../resize";
import routeName from "../routeName";
import { NewLink } from "./Shared";

const SNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const Description = styled.div`
  text-align: center;
  @media ${device.mobile} {
    display: flex;
  }
  @media ${device.laptop} {
    display: block;
  }

  @media ${device.desktop} {
    display: block;
  }
`;
const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <SNavigation>
      <Description>
        <NewLink
          current={(pathname === routeName.home).toString()}
          to={routeName.home}
        >
          Home
        </NewLink>
        <NewLink
          current={(pathname === routeName.me).toString()}
          to={routeName.me}
        >
          About Me
        </NewLink>
        <NewLink
          current={(pathname === routeName.projects).toString()}
          to={routeName.projects}
        >
          Projects
        </NewLink>
      </Description>
    </SNavigation>
  );
};

export default Navigation;
