import React from "react";
import IndexPage from "../../../assets/projectImg/movieApp/google.png";
import HomePage from "../../../assets/projectImg/movieApp/HomePage.png";
import DetailPage from "../../../assets/projectImg/movieApp/Detail.png";
import LikePage from "../../../assets/projectImg/movieApp/LikePage.png";
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
          <Img src={IndexPage} />
          <TextCenter>• Google Play</TextCenter>
        </div>
        <div>
          <Img src={HomePage} />
          <TextCenter>• Home Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <Img src={DetailPage} />
          <TextCenter>• Deatil Page</TextCenter>
        </div>
        <div>
          <Img src={LikePage} />
          <TextCenter>• Like Page</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default FifthShow;
