import React from "react";
import KokoaImg from "../../../assets/projectImg/kakao/kokoaFirstPage.png";
import Kokoa2 from "../../../assets/projectImg/kakao/kokoaJoin.png";
import Kokoa3 from "../../../assets/projectImg/kakao/kokoChat.png";
import Kokoa4 from "../../../assets/projectImg/kakao/Mypage.png";
import {
  ShowBoxLayout,
  ImgBox,
  ImgBox2,
  ShowTitle,
  TitleBox,
  Img,
  TextCenter,
  HtmlIcon,
  CssIcon,
} from "./ShowShared";

const FirstShow = () => {
  return (
    <ShowBoxLayout>
      <ShowTitle>Kakao Clone</ShowTitle>
      <TitleBox>
        <HtmlIcon />
        <CssIcon />
      </TitleBox>
      <ImgBox>
        <div>
          <Img src={KokoaImg} />
          <TextCenter>• Index Page</TextCenter>
        </div>
        <div>
          <Img src={Kokoa2} />
          <TextCenter>• Join Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <Img src={Kokoa3} />
          <TextCenter>• Chat List</TextCenter>
        </div>
        <div>
          <Img src={Kokoa4} />
          <TextCenter>• My Page</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default FirstShow;
