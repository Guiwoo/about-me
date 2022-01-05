import React from "react";
import styled from "styled-components";
import MyImg from "../../assets/img/me1.jpg";
import { Box } from "../Shared";

const PersonalBox = styled(Box)`
  animation-duration: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoBox = styled.div``;

const Photo = styled.img`
  width: 160px;
  height: 200px;
  border-radius: 10px;
`;

const RightBox = styled.div`
  min-width: 60%;
`;

const Title = styled.div`
  margin: 30px 0px;
  font-weight: 600;
  font-size: 18px;
`;

const SubTitle = styled.div`
  margin: 5px 0px;
  color: rgba(255, 255, 255, 0.6);
`;
const ContentText = styled.div`
  margin: 5px 0px;
  margin-right: 20px;
  text-align: end;
  color: white;
`;

const Personal = () => {
  return (
    <PersonalBox>
      <LeftBox>
        <PhotoBox>
          <Photo src={MyImg} />
        </PhotoBox>
      </LeftBox>
      <RightBox>
        <Title>PERSONAL INFO</Title>
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
            <ContentText>
              Uijeongbu-si, Gyeonggi-do, Republic of Korea
            </ContentText>
          </SubTitle>
          <SubTitle>
            <div>Address:</div>
            <ContentText>902-Ho,4-Dong, 69, Neunggok-ro</ContentText>
          </SubTitle>
        </div>
      </RightBox>
    </PersonalBox>
  );
};

export default Personal;
