import React from "react";
import styled from "styled-components";

//Page Fade in add

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

const PersonalBox = styled.div`
  width: 50%;
  height: 100%;
`;

const AdditionalBox = styled.div`
  width: 50%;
  height: 100%;
`;

const SecondLayer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;

const CareerBox = styled.div`
  width: 50%;
  height: 100%;
`;

const EducationBox = styled.div`
  width: 50%;
  height: 100%;
`;

const AboutMe = () => {
  return (
    <Container>
      <FirstLayer>
        <PersonalBox>Personal</PersonalBox>
        <AdditionalBox>Additional</AdditionalBox>
      </FirstLayer>
      <SecondLayer>
        <CareerBox>Carrer</CareerBox>
        <EducationBox>Education</EducationBox>
      </SecondLayer>
    </Container>
  );
};

export default AboutMe;
