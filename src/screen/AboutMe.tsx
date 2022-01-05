import React from "react";
import styled, { keyframes } from "styled-components";
import Career from "../components/AboutMe/Career";
import Education from "../components/AboutMe/Education";
import Personal from "../components/AboutMe/Personal";
import SubPersonal from "../components/AboutMe/SubPersonal";
import RightScreenLayOut from "../components/Layer";

const Container = styled.div`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const AboutMe = () => {
  return (
    <Container>
      <RightScreenLayOut>
        <Personal />
        <SubPersonal />
      </RightScreenLayOut>
      <RightScreenLayOut>
        <Career />
        <Education />
      </RightScreenLayOut>
    </Container>
  );
};

export default AboutMe;
