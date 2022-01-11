import React from "react";
import styled from "styled-components";
import { aws_address } from "../../utils/aws";
import {
  DetailLayout,
  ItemBoxLayout,
  Description,
  MainBox,
  GoThere,
  Demo,
  PhotoText,
  ImgText,
} from "./DetailShare";

const cards = [
  aws_address.Mmovie.one,
  aws_address.Mmovie.two,
  aws_address.Mmovie.three,
  aws_address.Mmovie.four,
  aws_address.Mmovie.five,
];

const VideoBox = styled.video`
  width: 380px;
  height: 320px;
  border-radius: 50px;
`;

const Detail_5 = () => {
  return (
    <DetailLayout text={"Movie App Mobie"}>
      <MainBox>
        <ItemBoxLayout text={`• Build With Expo & Cross Platform Mobile`}>
          <GoThere>
            <Demo
              href="https://play.google.com/store/apps/details?id=co.guiwoo.Guvies"
              target="_blank"
            >
              Demo
            </Demo>
            <Demo href="https://github.com/Guiwoo/Guvies" target="_blank">
              Github
            </Demo>
          </GoThere>
          <Description>• Preview</Description>
          <VideoBox src={aws_address.Mmovie.video} autoPlay loop muted />
        </ItemBoxLayout>
        <ItemBoxLayout text={"• Specific"}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ImgText cards={cards} />
            <div
              style={{ display: "flex", alignItems: "end", marginLeft: "15px" }}
            >
              <div>
                <PhotoText>• Expo React</PhotoText>
                <PhotoText>• React navigation</PhotoText>
                <PhotoText>• Styled-Components</PhotoText>
                <PhotoText>• Data Fectching</PhotoText>
                <PhotoText>• Gesture Animation</PhotoText>
              </div>
            </div>
          </div>
        </ItemBoxLayout>
      </MainBox>
    </DetailLayout>
  );
};

export default Detail_5;
