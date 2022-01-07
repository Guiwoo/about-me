import React from "react";
import styled from "styled-components";
import Career from "../components/AboutMe/Career";
import Education from "../components/AboutMe/Education";
import Personal from "../components/AboutMe/Personal";
import SubPersonal from "../components/AboutMe/SubPersonal";
import { BgContainer } from "../components/Shared";
import AboutMeLayout from "../components/AboutMe/ScreenLayout";

const AboutContainer = styled(BgContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0px 0px 20px;
  height: 100%;
`;

const AboutMe = () => {
  return (
    <AboutContainer>
      <AboutMeLayout>
        <Personal />
        <SubPersonal />
      </AboutMeLayout>
      <AboutMeLayout>
        <Career />
        <Education />
      </AboutMeLayout>
    </AboutContainer>
  );
};

export default AboutMe;
