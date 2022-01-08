import React from "react";
import styled from "styled-components";
import KokoaImg from "../../../assets/projectImg/kakao/kokoaFirstPage.png";
import Kokoa2 from "../../../assets/projectImg/kakao/kokoaJoin.png";
import Kokoa3 from "../../../assets/projectImg/kakao/kokoChat.png";
import Kokoa4 from "../../../assets/projectImg/kakao/Mypage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";
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

const HtmlIcon = styled(DefaultIcon)`
  background: linear-gradient(
    90deg,
    rgba(222, 8, 1, 1) 0%,
    rgba(232, 99, 42, 1) 50%
  );
`;
const CssIcon = styled(DefaultIcon)`
  background: linear-gradient(
    90deg,
    rgba(3, 112, 181, 1) 0%,
    rgba(3, 145, 212, 1) 50%
  );
`;

const FirstShow = () => {
  return (
    <ShowBoxLayout>
      <ShowTitle>Kakao Clone</ShowTitle>
      <TitleBox>
        <HtmlIcon>
          <FontAwesomeIcon icon={faHtml5} /> HTML
        </HtmlIcon>
        <CssIcon>
          <FontAwesomeIcon icon={faCss3} /> CSS
        </CssIcon>
      </TitleBox>
      <ImgBox>
        <div>
          <Img src={KokoaImg} />
          <TextCenter>• Index Page</TextCenter>
        </div>
        <div>
          <Img src={Kokoa2} />
          <TextCenter>• Join Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <Img src={Kokoa3} />
          <TextCenter>• Chat List</TextCenter>
        </div>
        <div>
          <Img src={Kokoa4} />
          <TextCenter>• My Page</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default FirstShow;
