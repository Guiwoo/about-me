import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Goal from "./SubComponent/Goal";
import Iam from "./SubComponent/Iam";
import { Box } from "../Shared";
import ContactMe from "./SubComponent/Contact";
import { device } from "../../resize";

const AdditionalBox = styled(Box)`
  animation-duration: 1.2s;
  border-left: 1px solid white;
  display: flex;
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 50%;
  }

  @media ${device.desktop} {
    width: 50%;
  }
`;

const MainContent = styled.div`
  padding: 10px 0px;
  margin-left: 20px;
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
