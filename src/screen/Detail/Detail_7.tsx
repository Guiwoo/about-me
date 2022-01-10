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
  aws_address.review.one,
  aws_address.review.two,
  aws_address.review.three,
  aws_address.review.four,
];

const Detail_7 = () => {
  return (
    <DetailLayout text={"Movie & Book Web"}>
      <MainBox>
        <ItemBoxLayout text={`• Build With Django and Tailwind`}>
          <GoThere>
            <Demo
              href="http://review-web-latest.eba-y9mny2pm.ap-northeast-2.elasticbeanstalk.com/"
              target="_blank"
            >
              Demo
            </Demo>
            <Demo href="https://github.com/Guiwoo/review_web" target="_blank">
              Github
            </Demo>
          </GoThere>
          <Description>• Preview</Description>
          <VideoSection videoUrl={aws_address.review.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={"• Specific"}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ImgText cards={cards} />
            <div
              style={{ display: "flex", alignItems: "end", marginLeft: "15px" }}
            >
              <div>
                <PhotoText>• Django & Python</PhotoText>
                <PhotoText>• Models Design</PhotoText>
                <PhotoText>• Admin Pannel</PhotoText>
                <PhotoText>• Tailwind Css </PhotoText>
              </div>
            </div>
          </div>
        </ItemBoxLayout>
      </MainBox>
    </DetailLayout>
  );
};

export default Detail_7;
