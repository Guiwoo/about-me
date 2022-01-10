import React from "react";
import styled from "styled-components";
import MacBook from "../../assets/img/맥북.png";
import VideoHtml from "../../assets/projectImg/kakao/html.mov";
import MotionHome from "../../assets/projectImg/modal/MotionHome.png";
import MotionAdd from "../../assets/projectImg/modal/MotionAddPage.png";
import MotionPhoto from "../../assets/projectImg/modal/MotionPhoto.png";
import MotionFull from "../../assets/projectImg/modal/MotionFull.png";
import { TitleText } from "../../components/Shared";
import {
  Img,
  ImgBox,
  TextCenter,
  ImgBox2,
} from "../../components/Project/ShowBox/ShowShared";
import { aws_address } from "../../aws";

const Container = styled.div`
  padding: 20px;
`;
const Title = styled(TitleText)`
  font-size: 24px;
`;
const MainBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ItmeBox = styled.div`
  width: 45%;
`;

const Description = styled.div`
  font-size: 20px;
  margin: 15px 0px;
`;
const GoThere = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Demo = styled.a`
  margin-right: 10px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  padding: 2px 3px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: pink;
    transform: scale(1.1);
  }
`;
const VideoSection = styled.div`
  position: relative;
`;

const MacBookImg = styled.div`
  background: url(${MacBook});
  background-position: center;
  background-repeat: none;
  background-size: cover;
  min-width: 406px;
  min-height: 315px;
`;

const VideoBox = styled.video`
  max-width: 380px;
  max-height: 320px;
  position: absolute;
  top: 35px;
  right: 18px;
  border-radius: 5px;
`;
const FixedImg = styled(Img)`
  width: 140px;
  height: 170px;
`;
const FixedText = styled(TextCenter)`
  margin-top: 15px;
`;

const Detail_2 = () => (
  <Container>
    <Title>Motion</Title>
    <MainBox>
      <ItmeBox>
        <Description>• Html,Css and JavaScript Interactive Web</Description>
        <GoThere>
          <Demo href="#">Comming Soon</Demo>
          <Demo href="https://github.com/Guiwoo/Lotion" target="_blank">
            Github
          </Demo>
        </GoThere>
        <Description>• Preview</Description>
        <VideoSection>
          <MacBookImg>
            <VideoBox src={aws_address.modal.video} autoPlay loop muted />
          </MacBookImg>
        </VideoSection>
      </ItmeBox>
      <ItmeBox>
        <Description>• Specific</Description>
        <ImgBox>
          <div>
            <FixedImg src={MotionHome} />
            <FixedText>• Index Page</FixedText>
          </div>
          <div>
            <FixedImg src={MotionAdd} />
            <FixedText>• Join Page</FixedText>
          </div>
        </ImgBox>
        <ImgBox2>
          <div>
            <FixedImg src={MotionPhoto} />
            <FixedText>• Chat List</FixedText>
          </div>
          <div>
            <FixedImg src={MotionFull} />
            <FixedText>• My Page</FixedText>
          </div>
        </ImgBox2>
      </ItmeBox>
    </MainBox>
  </Container>
);

export default Detail_2;
