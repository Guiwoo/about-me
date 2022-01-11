import React from "react";
import { useNavigate } from "react-router";
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
  NavForProjectLeft,
  NavForProject,
  IisEnProp,
} from "./DetailShare";

const cards = [
  aws_address.movie.one,
  aws_address.movie.two,
  aws_address.movie.three,
  aws_address.movie.four,
];

const Detail_4: React.FC<IisEnProp> = ({ isEn }) => {
  const navigate = useNavigate();
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
          <Description>{isEn ? "• Preview" : "• 미리보기"}</Description>
          <NavForProjectLeft onClick={() => navigate(routeName.third)}>
            ✈️ Project 3
          </NavForProjectLeft>
          <VideoSection videoUrl={aws_address.movie.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={isEn ? "• Details" : "• 세부사항"}>
          <TheBox>
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
            <FixedMobileNav onClick={() => navigate(routeName.fifth)}>
              Project 5 ✈️
            </FixedMobileNav>
            <NavForProject onClick={() => navigate(routeName.fifth)}>
              Project 5 ✈️
            </NavForProject>
          </TheBox>
        </ItemBoxLayout>
      </MainBox>
    </DetailLayout>
  );
};

export default Detail_4;
