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
  aws_address.kakao.one,
  aws_address.kakao.two,
  aws_address.kakao.three,
  aws_address.kakao.four,
];

const Detail_1 = () => {
  return (
    <DetailLayout text={"Kakao Clone Project"}>
      <MainBox>
        <ItemBoxLayout text={"• Html and css Cloning Kakao Chat screen"}>
          <GoThere>
            <Demo
              href="https://guiwoo.github.io/kokoa-example/"
              target="_blank"
            >
              Demo
            </Demo>
            <Demo
              href="https://github.com/Guiwoo/kokoa-example"
              target="_blank"
            >
              Github
            </Demo>
          </GoThere>
          <Description>• Preview</Description>
          <VideoSection videoUrl={aws_address.kakao.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={"• Specific"}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ImgText cards={cards} />
            <div
              style={{ display: "flex", alignItems: "end", marginLeft: "15px" }}
            >
              <div>
                <PhotoText>• Learn Html & Css</PhotoText>
                <PhotoText>• Reset Css, Set Variable</PhotoText>
                <PhotoText>• Components Deviding Css</PhotoText>
                <PhotoText>• FontAwesome Icon</PhotoText>
                <PhotoText>• Animations</PhotoText>
              </div>
            </div>
          </div>
        </ItemBoxLayout>
      </MainBox>
    </DetailLayout>
  );
};

export default Detail_1;
