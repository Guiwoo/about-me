import React from "react";
import styled from "styled-components";
import MacBook from "../../assets/img/맥북.png";
import VideoHtml from "../../assets/projectImg/kakao/html.mov";
import KokoaImg from "../../assets/projectImg/kakao/kokoaFirstPage.png";
import Kokoa2 from "../../assets/projectImg/kakao/kokoaJoin.png";
import Kokoa3 from "../../assets/projectImg/kakao/kokoChat.png";
import Kokoa4 from "../../assets/projectImg/kakao/Mypage.png";
import { TitleText } from "../../components/Shared";
import {
  Img,
  ImgBox,
  TextCenter,
  ImgBox2,
  HtmlIcon,
  CssIcon,
} from "../../components/Project/ShowBox/ShowShared";

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
  width: 413px;
  height: 311px;
`;

const VideoBox = styled.video`
  max-width: 380px;
  max-height: 300px;
  position: absolute;
  top: 30px;
  right: 26px;
`;
const FixedImg = styled(Img)`
  width: 140px;
  height: 170px;
`;
const FixedText = styled(TextCenter)`
  margin-top: 15px;
`;

const Detail_1 = () => (
  <Container>
    <Title>KAKAO CLONE</Title>
    <MainBox>
      <ItmeBox>
        <Description>• Html and css Cloning Kakao Chat screen</Description>
        <GoThere>
          <Demo href="https://guiwoo.github.io/kokoa-example/" target="_blank">
            Demo
          </Demo>
          <Demo href="https://github.com/Guiwoo/kokoa-example" target="_blank">
            Github
          </Demo>
        </GoThere>
        <Description>• Preview</Description>
        <VideoSection>
          <MacBookImg>
            <VideoBox src={VideoHtml} autoPlay loop muted />
          </MacBookImg>
        </VideoSection>
      </ItmeBox>
      <ItmeBox>
        <Description>• Specific</Description>
        <ImgBox>
          <div>
            <FixedImg src={KokoaImg} />
            <FixedText>• Index Page</FixedText>
          </div>
          <div>
            <FixedImg src={Kokoa2} />
            <FixedText>• Join Page</FixedText>
          </div>
        </ImgBox>
        <ImgBox2>
          <div>
            <FixedImg src={Kokoa3} />
            <FixedText>• Chat List</FixedText>
          </div>
          <div>
            <FixedImg src={Kokoa4} />
            <FixedText>• My Page</FixedText>
          </div>
        </ImgBox2>
      </ItmeBox>
    </MainBox>
  </Container>
);

export default Detail_1;
