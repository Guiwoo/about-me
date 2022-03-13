import React, {useContext} from "react";
import styled from "styled-components";
import {device} from "../../utils/resize";
import {LangContext} from "../../utils/toggleLang";
import {Box, TitleText} from "../Shared";

const CareerBox = styled(Box)`
  flex: 1;
  animation-duration: 1.3s;
  opacity: 0;
  @media ${device.mobile} {
    width: 100%;
    padding: 20px;
  }
  @media ${device.laptop} {
    width: 100%;
  }
  @media ${device.desktop} {
    width: 100%;
  }
`;

const MainBox = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

const Bar = styled.div`
  width: 3px;
  height: 150px;
  background-color: orange;
`;

const ContentBox = styled.div`
  margin: 30px 0px 0px 16px;
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
  const {isEn} = useContext(LangContext);
  return (
    <CareerBox>
      <MainBox>
        <TitleText>{isEn ? "Career" : "경력"}</TitleText>
        <ContentBox>
          <Bar />
          <Contents>
            <Content>
              <span>• 2015.03-2017.06 </span>
              <ContentText>
                {isEn ? "Military • First lieutenant" : "육군 • 중위"}
              </ContentText>
            </Content>
            <Content>
              <span>• 2017.09-2017.11</span>
              <ContentText>
                {isEn
                  ? "Nack DäckService(Stockholm) • Staff"
                  : "나카 타이어 서비스(스톡홀름) • 직원"}
              </ContentText>
            </Content>
            <Content>
              <span>• 2018.02-2020.10</span>
              <ContentText>
                {isEn
                  ? "Vapiano(Stockholm) • Chef"
                  : "바피아노(스톡홀름) • 요리사"}
              </ContentText>
            </Content>
          </Contents>
        </ContentBox>
      </MainBox>
    </CareerBox>
  );
};

export default Career;
