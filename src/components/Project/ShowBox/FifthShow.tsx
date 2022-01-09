import React from "react";
import styled from "styled-components";
import IndexPage from "../../../assets/projectImg/movieApp/google.png";
import HomePage from "../../../assets/projectImg/movieApp/HomePage.png";
import DetailPage from "../../../assets/projectImg/movieApp/Detail.png";
import LikePage from "../../../assets/projectImg/movieApp/LikePage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faMediumM } from "@fortawesome/free-brands-svg-icons";
import {
  ShowBoxLayout,
  ImgBox,
  ImgBox2,
  ShowTitle,
  TitleBox,
  DefaultIcon,
  Img,
  TextCenter,
} from "./ShowShared";

const ReactIcon = styled(DefaultIcon)`
  background: linear-gradient(
    0deg,
    rgba(94, 210, 243, 1) 0%,
    rgba(207, 205, 205, 1) 100%
  );
`;

const IMDB = styled(DefaultIcon)`
  background: linear-gradient(70deg, #7eccaa, 60%, #0ab7dd);
`;

const FifthShow = () => {
  return (
    <ShowBoxLayout>
      <ShowTitle>React Movie App • Api</ShowTitle>
      <TitleBox>
        <ReactIcon>
          <FontAwesomeIcon icon={faReact} /> ReactNative(Expo)
        </ReactIcon>
        <IMDB>
          <FontAwesomeIcon icon={faMediumM} /> IMDB
        </IMDB>
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
