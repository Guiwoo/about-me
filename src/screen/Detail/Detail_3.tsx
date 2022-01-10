import React from "react";
import { aws_address } from "../../aws";
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
  aws_address.youtube.one,
  aws_address.youtube.two,
  aws_address.youtube.three,
  aws_address.youtube.four,
  aws_address.youtube.five,
];

const Detail_3 = () => {
  return (
    <DetailLayout text={"Youtube Clone Project"}>
      <MainBox>
        <ItemBoxLayout text={`• Express,MongoDB and Pug, Cloning Youtube`}>
          <GoThere>
            <Demo href="https://wetube-updated.herokuapp.com/" target="_blank">
              Demo
            </Demo>
            <Demo href="https://github.com/Guiwoo/wetube_mac" target="_blank">
              Github
            </Demo>
          </GoThere>
          <Description>• Preview</Description>
          <VideoSection videoUrl={aws_address.youtube.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={"• Specific"}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ImgText cards={cards} />
            <div
              style={{ display: "flex", alignItems: "end", marginLeft: "15px" }}
            >
              <div>
                <PhotoText>• Express, Node, Npm</PhotoText>
                <PhotoText>• MongoDB</PhotoText>
                <PhotoText>• CRUD Videos</PhotoText>
                <PhotoText>• Authentication </PhotoText>
                <PhotoText>• Amazon S3 Connect</PhotoText>
                <PhotoText>• FFmpeg / Webassembly</PhotoText>
              </div>
            </div>
          </div>
        </ItemBoxLayout>
      </MainBox>
    </DetailLayout>
  );
};

export default Detail_3;
