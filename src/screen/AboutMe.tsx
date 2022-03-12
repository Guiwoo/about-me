import React from "react";
import styled from "styled-components";
import Career from "../components/AboutMe/Career";
import Education from "../components/AboutMe/Education";
import Personal from "../components/AboutMe/Personal";
import SubPersonal from "../components/AboutMe/SubPersonal";
import {BgContainer} from "../components/Shared";
import {device} from "../utils/resize";

const AboutContainer = styled(BgContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const FlexContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow-y: auto;
    height: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }
`;

const AboutMe = () => {
  return (
    <AboutContainer>
      <FlexContainer>
        <Personal />
        <SubPersonal />
        <Career />
        <Education />
      </FlexContainer>
    </AboutContainer>
  );
};

export default AboutMe;
