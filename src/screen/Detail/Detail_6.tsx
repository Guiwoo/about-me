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
  aws_address.coffee.one,
  aws_address.coffee.three,
  aws_address.coffee.four,
  aws_address.coffee.five,
];

const Detail_6 = () => {
  return (
    <DetailLayout text={"Coffee App"}>
      <MainBox>
        <ItemBoxLayout
          text={`• Build With Expo, React, Postgres, GrapQL, Apollo`}
        >
          <GoThere>
            <Demo href="https://nomadcoffee.netlify.app/" target="_blank">
              Demo
            </Demo>
            <Demo
              href="https://github.com/Guiwoo/nomadcoffee-frontend"
              target="_blank"
            >
              Github(Front)
            </Demo>
            <Demo
              href="https://github.com/Guiwoo/nomadcoffee-backend"
              target="_blank"
            >
              Github(Back)
            </Demo>
            <Demo
              href="https://github.com/Guiwoo/nomadCoffee-app"
              target="_blank"
            >
              Github(Mobile)
            </Demo>
          </GoThere>
          <Description>• Preview</Description>
          <VideoSection videoUrl={aws_address.coffee.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={"• Specific"}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ImgText cards={cards} />
            <div
              style={{ display: "flex", alignItems: "end", marginLeft: "15px" }}
            >
              <div>
                <PhotoText>• PostgresSQL & Prisma</PhotoText>
                <PhotoText>• Apollo Client & GraphQL</PhotoText>
                <PhotoText>• React Hook Form</PhotoText>
                <PhotoText>• React Navigation</PhotoText>
              </div>
            </div>
          </div>
        </ItemBoxLayout>
      </MainBox>
    </DetailLayout>
  );
};

export default Detail_6;
