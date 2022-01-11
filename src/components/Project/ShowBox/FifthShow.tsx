import React from "react";
import { aws_address } from "../../../utils/aws";
import {
  ShowBoxLayout,
  ImgBox,
  ImgBox2,
  ShowTitle,
  TitleBox,
  Img,
  TextCenter,
  ReactIcon,
  ImdbIcon,
} from "./ShowShared";

const FifthShow = () => {
  return (
    <ShowBoxLayout>
      <ShowTitle>React Movie App • Api</ShowTitle>
      <TitleBox>
        <ReactIcon />
        <ImdbIcon />
      </TitleBox>
      <ImgBox>
        <div>
          <Img src={aws_address.Mmovie.one} />
          <TextCenter>• Google Play</TextCenter>
        </div>
        <div>
          <Img src={aws_address.Mmovie.two} />
          <TextCenter>• Home Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <Img src={aws_address.Mmovie.three} />
          <TextCenter>• Deatil Page</TextCenter>
        </div>
        <div>
          <Img src={aws_address.Mmovie.five} />
          <TextCenter>• Like Page</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default FifthShow;
