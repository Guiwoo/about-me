import React from "react";
import IndexPage from "../../../assets/projectImg/reactMovie/index.png";
import TvPage from "../../../assets/projectImg/reactMovie/Tv.png";
import DetailPage from "../../../assets/projectImg/reactMovie/Detail.png";
import SearchPage from "../../../assets/projectImg/reactMovie/search.png";
import {
  ShowBoxLayout,
  ImgBox,
  ImgBox2,
  ShowTitle,
  TitleBox,
  Img,
  TextCenter,
  ImdbIcon,
  ReactIcon,
} from "./ShowShared";

const FourthShow = () => {
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
          <TextCenter>• Index Page</TextCenter>
        </div>
        <div>
          <Img src={TvPage} />
          <TextCenter>• Tv Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <Img src={DetailPage} />
          <TextCenter>• Deatil Page</TextCenter>
        </div>
        <div>
          <Img src={SearchPage} />
          <TextCenter>• Search Page</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default FourthShow;
