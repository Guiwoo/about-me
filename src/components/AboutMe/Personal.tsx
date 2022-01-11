import React from "react";
import styled from "styled-components";
import { aws_address } from "../../aws";
import { device } from "../../resize";
import { Box, TitleText } from "../Shared";

const PersonalBox = styled(Box)`
  animation-duration: 1s;
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

const Title = styled(TitleText)`
  margin: 30px 0px;
`;

const ContentBox = styled.div`
  display: flex;
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
  color: rgba(255, 255, 255, 0.6);
`;
const ContentText = styled.div`
  margin: 5px 0px;
  text-align: end;
  color: white;
  padding: 1px 30px;
`;

const Personal = () => {
  return (
    <PersonalBox>
      <Title>PERSONAL INFO</Title>
      <ContentBox>
        <LeftBox>
          <PhotoBox>
            <Photo src={aws_address.img.meSqaure} />
          </PhotoBox>
        </LeftBox>
        <RightBox>
          <div>
            <SubTitle>
              <div>Name:</div>
              <ContentText>Guiwoo Park</ContentText>
            </SubTitle>
            <SubTitle>
              <div>Birthday: </div>
              <ContentText>93.01.20</ContentText>
            </SubTitle>
            <SubTitle>
              <div>City:</div>
              <ContentText>Gyeonggi-do, Republic of Korea</ContentText>
            </SubTitle>
            <SubTitle>
              <div>Address:</div>
              <ContentText>902-Ho,4-Dong, 69, Neunggok-ro</ContentText>
            </SubTitle>
          </div>
        </RightBox>
      </ContentBox>
    </PersonalBox>
  );
};

export default Personal;
