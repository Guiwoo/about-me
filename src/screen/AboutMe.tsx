import React from "react";
import styled, { keyframes } from "styled-components";
import Career from "../components/AboutMe/Career";
import Education from "../components/AboutMe/Education";
import Personal from "../components/AboutMe/Personal";
import SubPersonal from "../components/AboutMe/SubPersonal";
import RightScreenLayOut from "../components/Layer";
import { BgContainer, GoNext } from "../components/Shared";
import routeName from "../routeName";

const AboutContainer = styled(BgContainer)`
  width: 100%;
  height: 90%;
  padding: 10px 0px 10px 20px;
`;

const AboutMe = () => {
  return (
    <AboutContainer>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <RightScreenLayOut>
          <Personal />
          <SubPersonal />
        </RightScreenLayOut>
        <RightScreenLayOut>
          <Career />
          <Education />
        </RightScreenLayOut>
      </div>
    </AboutContainer>
  );
};

export default AboutMe;
