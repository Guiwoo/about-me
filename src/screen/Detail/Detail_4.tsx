import React from "react";
import { aws_address } from "../../utils/aws";
import {
  DetailLayout,
  ItemBoxLayout,
  Description,
  MainBox,
  GoThere,
  Demo,
  VideoSection,
  PhotoText,
  ImgText,
} from "./DetailShare";

const cards = [
  aws_address.movie.one,
  aws_address.movie.two,
  aws_address.movie.three,
  aws_address.movie.four,
];

const Detail_3 = () => {
  return (
    <DetailLayout text={"Movie App"}>
      <MainBox>
        <ItemBoxLayout text={`• Build With React & TMDB API`}>
          <GoThere>
            <Demo href="https://guiflix.netlify.app/" target="_blank">
              Demo
            </Demo>
            <Demo href="https://github.com/Guiwoo/Guiflix" target="_blank">
              Github
            </Demo>
          </GoThere>
          <Description>• Preview</Description>
          <VideoSection videoUrl={aws_address.movie.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={"• Specific"}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ImgText cards={cards} />
            <div
              style={{ display: "flex", alignItems: "end", marginLeft: "15px" }}
            >
              <div>
                <PhotoText>• React</PhotoText>
                <PhotoText>• State Management</PhotoText>
                <PhotoText>• Styled-Components</PhotoText>
                <PhotoText>• Data Fectching</PhotoText>
              </div>
            </div>
          </div>
        </ItemBoxLayout>
      </MainBox>
    </DetailLayout>
  );
};

export default Detail_3;
