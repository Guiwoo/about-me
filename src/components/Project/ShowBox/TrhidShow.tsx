import React from "react";
import styled from "styled-components";
import YoutubeHome from "../../../assets/projectImg/youtube/YoutubeHome.png";
import LoginPage from "../../../assets/projectImg/youtube/loginPage.png";
import UploadPage from "../../../assets/projectImg/youtube/uploadPage.png";
import Profile from "../../../assets/projectImg/youtube/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import {
  ShowBoxLayout,
  ImgBox,
  ImgBox2,
  ShowTitle,
  TitleBox,
  DefaultIcon,
  Img,
  TextCenter,
  JsIcon,
} from "./ShowShared";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const NodeIcon = styled(DefaultIcon)`
  background: radial-gradient(
    circle,
    rgba(59, 129, 60, 1) 0%,
    rgba(8, 51, 0, 1) 100%
  );
`;

const MongoIcon = styled(DefaultIcon)`
  background: linear-gradient(70deg, #449a43, 60%, #004d00);
`;
const MongoText = styled.span``;

const ThirdShow = () => {
  return (
    <ShowBoxLayout>
      <ShowTitle>Youtube Clone • MongoDB</ShowTitle>
      <TitleBox>
        <MongoIcon>
          <FontAwesomeIcon icon={faLeaf} />
          <MongoText>MongoDB</MongoText>
        </MongoIcon>
        <NodeIcon>
          <FontAwesomeIcon icon={faNodeJs} /> NodeJS
        </NodeIcon>
        <JsIcon />
      </TitleBox>
      <ImgBox>
        <div>
          <Img src={YoutubeHome} />
          <TextCenter>• Index Page</TextCenter>
        </div>
        <div>
          <Img src={LoginPage} />
          <TextCenter>• Login Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <Img src={UploadPage} />
          <TextCenter>• Upload Photo</TextCenter>
        </div>
        <div>
          <Img src={Profile} />
          <TextCenter>• Profile</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default ThirdShow;
