import React from "react";
import {useNavigate} from "react-router";
import styled from "styled-components";
import {aws_address} from "../../utils/aws";
import routeName from "../../utils/routeName";
import {
  DetailLayout,
  ItemBoxLayout,
  Description,
  MainBox,
  GoThere,
  Demo,
  PhotoText,
  ImgText,
  FixedMobileNav,
  TheBox,
  NavForProjectLeft,
  NavForProject,
  IisEnProp,
  FixedNav,
} from "./DetailShare";

const cards = [
  aws_address.Mmovie.one,
  aws_address.Mmovie.two,
  aws_address.Mmovie.three,
  aws_address.Mmovie.four,
  aws_address.Mmovie.five,
];

const VideoBox = styled.video`
  max-height: 220px;
  display: flex;
`;

const Detail_5: React.FC<IisEnProp> = ({isEn}) => {
  const navigate = useNavigate();
  return (
    <DetailLayout text={"Movie App Mobie"}>
      <MainBox>
        <ItemBoxLayout text={`• Build With Expo & Cross Platform Mobile`}>
          <GoThere>
            <Demo
              href="https://play.google.com/store/apps/details?id=co.guiwoo.Guvies"
              target="_blank"
            >
              Demo
            </Demo>
            <Demo href="https://github.com/Guiwoo/Guvies" target="_blank">
              Github
            </Demo>
          </GoThere>
          <Description>{isEn ? "• Preview" : "• 미리보기"}</Description>
          <div style={{display: "flex", justifyContent: "center"}}>
            <VideoBox src={aws_address.Mmovie.video} autoPlay loop muted />
          </div>
        </ItemBoxLayout>
        <ItemBoxLayout text={isEn ? "• Details" : "• 세부사항"}>
          <TheBox>
            <ImgText cards={cards} />
            <div
              style={{display: "flex", alignItems: "end", marginLeft: "15px"}}
            >
              <div>
                <PhotoText>• Expo React</PhotoText>
                <PhotoText>• React navigation</PhotoText>
                <PhotoText>• Styled-Components</PhotoText>
                <PhotoText>• Data Fectching</PhotoText>
                <PhotoText>• Gesture Animation</PhotoText>
              </div>
            </div>
            <FixedMobileNav onClick={() => navigate(routeName.sixth)}>
              Project 6 ✈️
            </FixedMobileNav>
          </TheBox>
        </ItemBoxLayout>
      </MainBox>
      <FixedNav>
        <NavForProjectLeft onClick={() => navigate(routeName.fourth)}>
          ✈️ Projects 4
        </NavForProjectLeft>
        <NavForProject onClick={() => navigate(routeName.sixth)}>
          Project 6 ✈️
        </NavForProject>
      </FixedNav>
    </DetailLayout>
  );
};

export default Detail_5;
