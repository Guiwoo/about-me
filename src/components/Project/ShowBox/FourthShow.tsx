import React from "react";
import {
  ShowBoxLayout,
  ImgBox,
  ImgBox2,
  ShowTitle,
  TitleBox,
  NewImg,
  TextCenter,
  ImdbIcon,
  ReactIcon,
} from "./ShowShared";
import { aws_address } from "../../../utils/aws";

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
          <NewImg src={aws_address.movie.one} />
          <TextCenter>• Index Page</TextCenter>
        </div>
        <div>
          <NewImg src={aws_address.movie.two} />
          <TextCenter>• Tv Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <NewImg src={aws_address.movie.three} />
          <TextCenter>• Deatil Page</TextCenter>
        </div>
        <div>
          <NewImg src={aws_address.movie.four} />
          <TextCenter>• Search Page</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default FourthShow;
