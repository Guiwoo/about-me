import React from "react";
import styled, { keyframes } from "styled-components";

const Ascale = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(4) translateX(300px);
    filter: blur(10px);
  }
  50%,
  85% {
    opacity: 0.8;
    transform: scale(1) translateX(0);
  }

  100% {
    opacity: 1;
    filter: blur(0px);
  }`;

const Afade = keyframes` 
	0% {
		opacity: 0;
	}
	100% {
		opacity: 0.8;
	}
`;

const Container = styled.div`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const FirstLayer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;

const Box = styled.div`
  height: 100%;
  width: 50%;
  animation: ${Ascale} 2s linear forwards;
`;

const PersonalBox = styled(Box)`
  animation-duration: 0.5s;
`;

const AdditionalBox = styled(Box)`
  animation-duration: 1s;
`;

const CareerBox = styled(Box)`
  animation-duration: 1.5s;
`;

const EducationBox = styled(Box)`
  animation-duration: 2s;
`;

const AboutMe = () => {
  return (
    <Container>
      <FirstLayer>
        <PersonalBox>Personal</PersonalBox>
        <AdditionalBox>Additional</AdditionalBox>
      </FirstLayer>
      <FirstLayer>
        <CareerBox>Carrer</CareerBox>
        <EducationBox>Education</EducationBox>
      </FirstLayer>
    </Container>
  );
};

export default AboutMe;
