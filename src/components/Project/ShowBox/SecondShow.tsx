import React from "react";
import styled from "styled-components";
import MotionHome from "../../../assets/projectImg/modal/MotionHome.png";
import MotionAdd from "../../../assets/projectImg/modal/MotionAddPage.png";
import MotionPhoto from "../../../assets/projectImg/modal/MotionPhoto.png";
import MotionFull from "../../../assets/projectImg/modal/MotionFull.png";
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

const TsIcon = styled(DefaultIcon)`
  background: radial-gradient(
    circle,
    rgba(47, 115, 191, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  display: flex;
  align-items: center;
`;
const TsText = styled.span`
  font-size: 10px;
  background-color: white;
  color: rgba(47, 115, 191, 1);
  padding: 2px 0px;
  border-radius: 2px;
  margin-right: 2px;
`;

const SecondShow = () => {
  return (
    <ShowBoxLayout>
      <ShowTitle>Motion • Drag Items</ShowTitle>
      <TitleBox>
        <TsIcon>
          <TsText>Ts</TsText> <span>TypeScript</span>
        </TsIcon>
        <JsIcon />
      </TitleBox>
      <ImgBox>
        <div>
          <Img src={MotionHome} />
          <TextCenter>• Index Page</TextCenter>
        </div>
        <div>
          <Img src={MotionAdd} />
          <TextCenter>• Add Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <Img src={MotionPhoto} />
          <TextCenter>• Add Photo</TextCenter>
        </div>
        <div>
          <Img src={MotionFull} />
          <TextCenter>• Add Yotube</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default SecondShow;
