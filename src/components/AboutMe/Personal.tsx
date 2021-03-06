import React, {useContext} from "react";
import styled from "styled-components";
import {aws_address} from "../../utils/aws";
import {device} from "../../utils/resize";
import {LangContext} from "../../utils/toggleLang";
import {Box, TitleText} from "../Shared";

const PersonalBox = styled(Box)`
  flex: 1;
  animation-duration: 1s;
  @media ${device.mobile} {
    width: 100%;
    padding: 0px 40px;
  }
  @media ${device.laptop} {
    width: 30vw;
    padding: 0 20px;
  }

  @media ${device.desktop} {
    width: 30vw;
  }
  flex-direction: column;
`;

const Title = styled(TitleText)`
  margin: 30px 0px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoBox = styled.div`
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }

  @media ${device.desktop} {
    display: block;
  }
`;

const Photo = styled.img`
  width: 120px;
  height: 150px;
  border-radius: 10px;
  padding: 5px;
`;

const RightBox = styled.div`
  margin-left: 20px;
`;
const SubTitle = styled.div`
  margin: 5px 0px;
  color: ${(props) => props.theme.fontColor.main};
`;
const ContentText = styled.div`
  margin: 5px 0px;
  text-align: end;
  color: ${(props) => props.theme.fontColor.sub};
  padding: 1px 30px;
`;

const Personal = () => {
  const {isEn} = useContext(LangContext);
  return (
    <PersonalBox>
      <Title>{isEn ? "PERSONAL INFO" : "개인정보"}</Title>
      <ContentBox>
        <LeftBox>
          <PhotoBox>
            <Photo src={aws_address.img.meSqaure} />
          </PhotoBox>
        </LeftBox>
        <RightBox>
          <div>
            <SubTitle>
              <div>{isEn ? "Name: " : "이름: "}</div>
              <ContentText>{isEn ? "Guiwoo Park" : "박귀우"}</ContentText>
            </SubTitle>
            <SubTitle>
              <div>{isEn ? "Birthday: " : "생년월일"}</div>
              <ContentText>93.01.20</ContentText>
            </SubTitle>
            <SubTitle>
              <div>{isEn ? "City: " : "도시, 국가: "}</div>
              <ContentText>
                {isEn ? "Gyeonggi-do, Republic of Korea" : "대한민국 경기도"}
              </ContentText>
            </SubTitle>
            <SubTitle>
              <div>{isEn ? "Address:" : "상세주소"}</div>
              <ContentText>
                {isEn
                  ? "902-Ho,4-Dong, 69, Neunggok-ro"
                  : "능곡로 69 4동 902호"}
              </ContentText>
            </SubTitle>
          </div>
        </RightBox>
      </ContentBox>
    </PersonalBox>
  );
};

export default Personal;
