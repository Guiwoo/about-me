import React from "react";
import styled from "styled-components";
import MacBook from "../../assets/img/맥북.png";
import VideoHtml from "../../assets/projectImg/kakao/html.mov";
import KokoaImg from "../../assets/projectImg/kakao/kokoaFirstPage.png";
import Kokoa2 from "../../assets/projectImg/kakao/kokoaJoin.png";
import Kokoa3 from "../../assets/projectImg/kakao/kokoChat.png";
import Kokoa4 from "../../assets/projectImg/kakao/Mypage.png";
import { aws_address } from "../../aws";
import { ImgBox, ImgBox2 } from "../../components/Project/ShowBox/ShowShared";
import {
  DetailLayout,
  ItemBoxLayout,
  Description,
  MainBox,
  GoThere,
  Demo,
  VideoSection,
  FixedImg,
  FixedText,
} from "./DetailShare";

const Detail_1 = () => (
  <DetailLayout text={"KAKAO CLONE"}>
    <MainBox>
      <ItemBoxLayout text={"• Html and css Cloning Kakao Chat screen"}>
        <GoThere>
          <Demo href="https://guiwoo.github.io/kokoa-example/" target="_blank">
            Demo
          </Demo>
          <Demo href="https://github.com/Guiwoo/kokoa-example" target="_blank">
            Github
          </Demo>
        </GoThere>
        <Description>• Preview</Description>
        <VideoSection videoUrl={aws_address.kakao.video} />
      </ItemBoxLayout>
      <ItemBoxLayout text={"• Specific"}>
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
      </ItemBoxLayout>
    </MainBox>
  </DetailLayout>
);

export default Detail_1;
