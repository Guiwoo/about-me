import React from "react";
import styled, { keyframes } from "styled-components";
import Career from "../components/AboutMe/Career";
import Education from "../components/AboutMe/Education";
import Personal from "../components/AboutMe/Personal";
import SubPersonal from "../components/AboutMe/SubPersonal";
import RightScreenLayOut from "../components/Layer";
import { BgContainer } from "../components/Shared";

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
      </div>
    </BgContainer>
  );
};

export default AboutMe;
