import React from "react";
import styled, { keyframes } from "styled-components";
import Career from "../components/AboutMe/Career";
import Education from "../components/AboutMe/Education";
import Personal from "../components/AboutMe/Personal";
import SubPersonal from "../components/AboutMe/SubPersonal";
import RightScreenLayOut from "../components/Layer";
import { BgContainer, GoNext } from "../components/Shared";
import routeName from "../routeName";

const AboutMe = () => {
  return (
    <BgContainer>
      <div
        style={{
          padding: 20,
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
        <GoNext routeName={routeName.projects} title={"Projects"} />
      </div>
    </BgContainer>
  );
};

export default AboutMe;
