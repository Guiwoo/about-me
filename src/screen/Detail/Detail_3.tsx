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
  aws_address.modal.one,
  aws_address.modal.two,
  aws_address.modal.three,
  aws_address.modal.four,
];

const Detail_3 = () => {
  return (
    <DetailLayout text={"Motion Project"}>
      <MainBox>
        <ItemBoxLayout text={"• Html,Css and JavaScript, Dragging items"}>
          <GoThere>
            <Demo href="#">Comming Soon</Demo>
            <Demo href="https://github.com/Guiwoo/Lotion" target="_blank">
              Github
            </Demo>
          </GoThere>
          <Description>• Preview</Description>
          <VideoSection videoUrl={aws_address.modal.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={"• Specific"}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ImgText cards={cards} />
            <div
              style={{ display: "flex", alignItems: "end", marginLeft: "15px" }}
            >
              <div>
                <PhotoText>• Learn JavaSciprt</PhotoText>
                <PhotoText>• Manipulating documents</PhotoText>
                <PhotoText>• Mouse EventListner</PhotoText>
                <PhotoText>• TypeScript</PhotoText>
                <PhotoText>• Regex Extract "URL"</PhotoText>
              </div>
            </div>
          </div>
        </ItemBoxLayout>
      </MainBox>
    </DetailLayout>
  );
};

export default Detail_3;
