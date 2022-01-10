import React from "react";
import styled from "styled-components";
import Search from "../../../assets/projectImg/reviewApp/Search.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import {
  ShowBoxLayout,
  ImgBox,
  ImgBox2,
  ShowTitle,
  TitleBox,
  DefaultIcon,
  Img,
  TextCenter,
} from "./ShowShared";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { aws_address } from "../../../aws";

const TailIcon = styled(DefaultIcon)`
  background: linear-gradient(
    0deg,
    rgba(55, 188, 248, 1) 0%,
    rgba(207, 205, 205, 1) 100%
  );
`;

const DjangoIcon = styled(DefaultIcon)`
  background: linear-gradient(120deg, #336790, 60%, white);
`;

const SevenShow = () => {
  return (
    <ShowBoxLayout>
      <ShowTitle>Review App • Django</ShowTitle>
      <TitleBox>
        <DjangoIcon>
          <FontAwesomeIcon icon={faPython} /> Django
        </DjangoIcon>
        <TailIcon>
          <FontAwesomeIcon icon={faWind} /> Tailwind
        </TailIcon>
      </TitleBox>
      <ImgBox>
        <div>
          <Img src={aws_address.review.one} />
          <TextCenter>• Home Page</TextCenter>
        </div>
        <div>
          <Img src={aws_address.review.two} />
          <TextCenter>• Login Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <Img src={aws_address.review.three} />
          <TextCenter>• Detail Page</TextCenter>
        </div>
        <div>
          <Img src={aws_address.review.four} />
          <TextCenter>• Search Page</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default SevenShow;
