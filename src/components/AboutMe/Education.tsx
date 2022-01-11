import React from "react";
import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import { device } from "../../resize";
import routeName from "../../routeName";
import { Box, TitleText, MobileNav } from "../Shared";

const EducationBox = styled(Box)`
  animation-duration: 1.4s;
  @media ${device.mobile} {
    width: 100%;
    padding: 100px 0px;
  }
  @media ${device.laptop} {
    width: 50%;
  }
  @media ${device.desktop} {
    width: 50%;
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
  return (
    <>
      <EducationBox>
        <div style={{ marginLeft: 20 }}>
          <TitleText>Education</TitleText>
          <MainBox>
            <Empty></Empty>
            <Empty>
              ROTC,
              <br />
              Military Course
            </Empty>
            <Empty></Empty>
            <Empty>
              Nomad,
              <br />
              Onlie Course
              <br />
              Programing
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
              Online Course
              <br />
              Programing
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
