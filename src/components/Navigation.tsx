import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import routeName from "../routeName";
import { NewLine } from "./Shared";

const SNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const Description = styled.div`
  text-align: center;
`;
const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <SNavigation>
      <Description>
        <NewLine current={pathname === routeName.home} to={routeName.home}>
          Home
        </NewLine>
        <NewLine current={pathname === routeName.me} to={routeName.me}>
          About Me
        </NewLine>
        <NewLine
          current={pathname === routeName.projects}
          to={routeName.projects}
        >
          Projects
        </NewLine>
      </Description>
    </SNavigation>
  );
};

export default Navigation;
