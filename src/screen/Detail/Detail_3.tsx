import React from "react";
import {useNavigate} from "react-router";
import {aws_address} from "../../utils/aws";
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
  FixedNav,
} from "./DetailShare";

const cards = [
  aws_address.youtube.one,
  aws_address.youtube.two,
  aws_address.youtube.three,
  aws_address.youtube.four,
  aws_address.youtube.five,
];

const Detail_3: React.FC<IisEnProp> = ({isEn}) => {
  const navigate = useNavigate();
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
          <Description>{isEn ? "• Preview" : "• 미리보기"}</Description>
          <VideoSection videoUrl={aws_address.youtube.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={isEn ? "• Details" : "• 세부사항"}>
          <TheBox>
            <ImgText cards={cards} />
            <div
              style={{display: "flex", alignItems: "end", marginLeft: "15px"}}
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
            <FixedMobileNav onClick={() => navigate(routeName.fourth)}>
              Project 4 ✈️
            </FixedMobileNav>
          </TheBox>
        </ItemBoxLayout>
      </MainBox>
      <FixedNav>
        <NavForProjectLeft onClick={() => navigate(routeName.second)}>
          ✈️ Projects 2
        </NavForProjectLeft>
        <NavForProject onClick={() => navigate(routeName.fourth)}>
          Project 4 ✈️
        </NavForProject>
      </FixedNav>
    </DetailLayout>
  );
};

export default Detail_3;
