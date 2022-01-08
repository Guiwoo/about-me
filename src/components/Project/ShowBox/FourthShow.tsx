import React from "react";
import styled from "styled-components";
import IndexPage from "../../../assets/projectImg/reactMovie/index.png";
import TvPage from "../../../assets/projectImg/reactMovie/Tv.png";
import DetailPage from "../../../assets/projectImg/reactMovie/Detail.png";
import SearchPage from "../../../assets/projectImg/reactMovie/search.png";
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
  background: radial-gradient(
    circle,
    rgba(3, 209, 247, 1) 0%,
    rgba(218, 218, 218, 1) 100%
  );
`;

const IMDB = styled(DefaultIcon)`
  background: linear-gradient(70deg, #7eccaa, 60%, #0ab7dd);
`;

const FourthShow = () => {
  return (
    <ShowBoxLayout>
      <ShowTitle>React Movie App • Api</ShowTitle>
      <TitleBox>
        <ReactIcon>
          <FontAwesomeIcon icon={faReact} /> React
        </ReactIcon>
        <IMDB>
          <FontAwesomeIcon icon={faMediumM} /> IMDB
        </IMDB>
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
