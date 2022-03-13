import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Goal from "./SubComponent/Goal";
import Iam from "./SubComponent/Iam";
import {Box} from "../Shared";
import ContactMe from "./SubComponent/Contact";
import {device} from "../../utils/resize";

const AdditionalBox = styled(Box)`
  animation-duration: 1.2s;
  display: flex;
  @media ${device.mobile} {
    width: 100%;
    padding: 0px 20px;
  }
  @media ${device.laptop} {
    width: 30vw;
  }

  @media ${device.desktop} {
    width: 30vw;
  }
`;

const MainContent = styled.div`
  padding: 10px 0px;
  margin-left: 20px;
  box-sizing: content-box;
`;

const SubPersonal = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <AdditionalBox>
      <MainContent>
        <ContactMe index={index} />
        <Iam index={index} />
        <Goal />
      </MainContent>
    </AdditionalBox>
  );
};

export default SubPersonal;
