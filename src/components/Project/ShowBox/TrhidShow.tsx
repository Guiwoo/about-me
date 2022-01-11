import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import {
  ShowBoxLayout,
  ImgBox,
  ImgBox2,
  ShowTitle,
  TitleBox,
  DefaultIcon,
  NewImg,
  TextCenter,
  JsIcon,
} from "./ShowShared";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { aws_address } from "../../../utils/aws";

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
          <NewImg src={aws_address.youtube.one} />
          <TextCenter>• Index Page</TextCenter>
        </div>
        <div>
          <NewImg src={aws_address.youtube.two} />
          <TextCenter>• Login Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <NewImg src={aws_address.youtube.three} />
          <TextCenter>• Upload Photo</TextCenter>
        </div>
        <div>
          <NewImg src={aws_address.youtube.four} />
          <TextCenter>• Profile</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default ThirdShow;
