import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { aws_address } from "../../utils/aws";
import routeName from "../../utils/routeName";
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
  FixedMobileNav,
  TheBox,
  NavForProject,
  NavForProjectLeft,
  IisEnProp,
} from "./DetailShare";

const cards = [
  aws_address.modal.one,
  aws_address.modal.two,
  aws_address.modal.three,
  aws_address.modal.four,
];

const GoBackNav = styled.div`
  position: absolute;
  bottom: -12%;
`;

const Detail_2: React.FC<IisEnProp> = ({ isEn }) => {
  const navigate = useNavigate();
  return (
    <DetailLayout text={"Motion Project"}>
      <MainBox>
        <ItemBoxLayout
          text={
            isEn
              ? "• Html,Css and JavaScript, Dragging items"
              : "• Html,Css 와 JavaScript, 아이템 드래그"
          }
        >
          <GoThere>
            <Demo href="#">Comming Soon</Demo>
            <Demo href="https://github.com/Guiwoo/Lotion" target="_blank">
              Github
            </Demo>
          </GoThere>
          <Description>{isEn ? "• Preview" : "• 미리보기"}</Description>
          <NavForProjectLeft onClick={() => navigate(routeName.first)}>
            ✈️ Project 1
          </NavForProjectLeft>
          <VideoSection videoUrl={aws_address.modal.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={isEn ? "• Details" : "• 세부사항"}>
          <TheBox>
            <ImgText cards={cards} />
            <div
              style={{ display: "flex", alignItems: "end", marginLeft: "15px" }}
            >
              <div>
                <PhotoText>• {isEn ? "Learn" : "학습"} JavaSciprt</PhotoText>
                <PhotoText>• Manipulating Html Tags</PhotoText>
                <PhotoText>• Mouse EventListner</PhotoText>
                <PhotoText>• TypeScript</PhotoText>
                <PhotoText>• Regex {isEn ? "Extract" : "추출"} "URL"</PhotoText>
              </div>
            </div>
            <FixedMobileNav onClick={() => navigate(routeName.third)}>
              Project 3 ✈️
            </FixedMobileNav>
            <NavForProject onClick={() => navigate(routeName.third)}>
              Project 3 ✈️
            </NavForProject>
          </TheBox>
        </ItemBoxLayout>
      </MainBox>
    </DetailLayout>
  );
};

export default Detail_2;
