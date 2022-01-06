import React, { useState } from "react";
import styled from "styled-components";
import { Box, TitleText } from "../Shared";

const CareerBox = styled(Box)`
  animation-duration: 1.5s;
  width: 50%;
  border-top: 1px solid white;
  border-right: 1px solid white;
`;

const MainBox = styled.div`
  width: 100%;
`;

const Bar = styled.div`
  width: 3px;
  height: 150px;
  background-color: orange;
`;

const ContentBox = styled.div`
  margin: 30px 0px 0px 18px;
  display: flex;
  align-items: center;
`;

const Contents = styled.div`
  width: 100%;
  padding: 0px 20px;
  margin-right: 32px;
`;

const Content = styled.div`
  margin: 5px 0px;
`;

const ContentText = styled.span`
  display: flex;
  justify-content: end;
  margin: 10px 0px;
`;

const Career = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <CareerBox>
      <MainBox>
        <TitleText>Career</TitleText>
        <ContentBox>
          <Bar />
          <Contents>
            <Content onMouseEnter={onHover} onMouseLeave={onHover}>
              <span>• 2015.03-2017.06 </span>
              <ContentText>Military • First lieutenant</ContentText>
            </Content>
            <Content>
              <span>• 2017.09-2017.11</span>
              <ContentText>Nack DäckService(Stockholm) • Staff</ContentText>
            </Content>
            <Content>
              <span>• 2018.02-2020.10</span>
              <ContentText>Vapiano(Stockholm) • Chef</ContentText>
            </Content>
          </Contents>
        </ContentBox>
      </MainBox>
    </CareerBox>
  );
};

export default Career;
