import React, {useContext} from "react";
import {useNavigate} from "react-router";
import styled, {keyframes} from "styled-components";
import {device} from "../../utils/resize";
import routeName from "../../utils/routeName";
import {LangContext} from "../../utils/toggleLang";
import {Box, TitleText, MobileNav} from "../Shared";

const EducationBox = styled(Box)`
  flex: 1;
  animation-duration: 1.4s;
  width: 100%;
  height: 50vh;
  @media ${device.mobile} {
    padding: 100px 0px;
  }
  @media ${device.laptop} {
    padding: 0px;
    height: 35vh;
  }
  @media ${device.desktop} {
    padding: 0px;
  }
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
`;

const SpreadBox = keyframes`
from {
    opacity:0.3;
    transform: scale(10) translateY(0);
  }
  to {
    opacity:1;
    transform: scale(1) translateY(60%);
  }
`;

const FirstBox = styled.div`
  opacity: 0;
  transform: translateY(20%);
  width: 90px;
  height: 50px;
  background-color: #448c95;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  animation: ${SpreadBox} 0.5s linear forwards;
  animation-delay: 1.5s;
`;
const SecondBox = styled(FirstBox)`
  background-color: #2d6e77;
  animation-delay: 1.6s;
`;
const ThirdBox = styled(FirstBox)`
  background-color: #1e646e;
  animation-delay: 1.7s;
`;
const FourthBox = styled(FirstBox)`
  background-color: teal;
  animation-delay: 1.8s;
`;

const Empty = styled(FirstBox)`
  opacity: 0;
  background-color: transparent;
  font-size: 12px;
  animation-delay: 2s;
`;

const Education = () => {
  const navigation = useNavigate();
  const {isEn} = useContext(LangContext);
  return (
    <>
      <EducationBox>
        <div style={{marginLeft: 20}}>
          <TitleText>{isEn ? "Education" : "교육"}</TitleText>
          <MainBox>
            <Empty></Empty>
            <Empty>
              ROTC,
              <br />
              {isEn ? "• Military Course" : "• 기초 군사 교육"}
            </Empty>
            <Empty></Empty>
            <Empty>
              Nomad,
              <br />
              {isEn ? "Onlie Course" : "• 온라인 교육"}
              <br />
              {isEn ? "Prgramming" : "• 프로그래밍"}
            </Empty>
          </MainBox>
          <MainBox>
            <FirstBox>2011</FirstBox>
            <SecondBox>2015</SecondBox>
            <ThirdBox>2020</ThirdBox>
            <FourthBox>2021</FourthBox>
          </MainBox>
          <MainBox>
            <Empty>
              Univ,
              <br /> Social-Welfare
            </Empty>
            <Empty></Empty>
            <Empty>
              Udemy, <br />
              {isEn ? "Onlie Course" : "• 온라인 교육"}
              <br />
              {isEn ? "Prgramming" : "• 프로그래밍"}
            </Empty>
            <Empty></Empty>
          </MainBox>
        </div>
        <MobileNav onClick={() => navigation(routeName.projects)}>
          Projects ✈️
        </MobileNav>
      </EducationBox>
    </>
  );
};

export default Education;
