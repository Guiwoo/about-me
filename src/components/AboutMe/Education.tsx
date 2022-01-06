import React from "react";
import styled from "styled-components";
import { Box } from "../Shared";

const EducationBox = styled(Box)`
  animation-duration: 2s;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FirstBox = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: yellow;
`;
const SecondBox = styled(FirstBox)`
  background-color: green;
`;
const ThirdBox = styled(FirstBox)`
  background-color: tomato;
`;
const FourthBox = styled(FirstBox)`
  background-color: teal;
`;

const Education = () => {
  return (
    <EducationBox>
      <FirstBox />
      <SecondBox />
      <ThirdBox />
      <FourthBox />
    </EducationBox>
  );
};

export default Education;
