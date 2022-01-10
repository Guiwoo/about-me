import React from "react";
import { aws_address } from "../../../aws";
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
      <div>
        <ImgBox>
          <div>
            <Img src={aws_address.kakao.one} />
            <TextCenter>• Index Page</TextCenter>
          </div>
          <div>
            <Img src={aws_address.kakao.two} />
            <TextCenter>• Join Page</TextCenter>
          </div>
        </ImgBox>
        <ImgBox2>
          <div>
            <Img src={aws_address.kakao.three} />
            <TextCenter>• Chat List</TextCenter>
          </div>
          <div>
            <Img src={aws_address.kakao.four} />
            <TextCenter>• My Page</TextCenter>
          </div>
        </ImgBox2>
      </div>
    </ShowBoxLayout>
  );
};

export default FirstShow;
