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
  NavForProject,
  NavForProjectLeft,
  IisEnProp,
} from "./DetailShare";

const cards = [
  aws_address.kakao.one,
  aws_address.kakao.two,
  aws_address.kakao.three,
  aws_address.kakao.four,
];

const Detail_1: React.FC<IisEnProp> = ({ isEn }) => {
  const navigate = useNavigate();
  return (
    <DetailLayout text={isEn ? "Kakao Clone Project" : "Kakao 클론 프로젝트"}>
      <MainBox>
        <ItemBoxLayout
          text={
            isEn
              ? "• Html and css Cloning Kakao Chat screen"
              : "• Html,Css 클론 카카오톡 화면"
          }
        >
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
          <Description>{isEn ? "• Preview" : "• 미리보기"}</Description>
          <NavForProjectLeft onClick={() => navigate(routeName.projects)}>
            ✈️ Projects
          </NavForProjectLeft>
          <VideoSection videoUrl={aws_address.kakao.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={isEn ? "• Details" : "• 세부사항"}>
          <TheBox>
            <ImgText cards={cards} />
            <div
              style={{ display: "flex", alignItems: "end", marginLeft: "15px" }}
            >
              <div>
                <PhotoText>• {isEn ? "Learn" : "학습"} Html & Css</PhotoText>
                <PhotoText>
                  • {isEn ? "Reset" : "초기화"} Css,{" "}
                  {isEn ? "Set Variable" : "변수 설정"}
                </PhotoText>
                <PhotoText>
                  • {isEn ? "Components Deviding" : "컴포넌트 나누기"} Css
                </PhotoText>
                <PhotoText>• FontAwesome Icon</PhotoText>
                <PhotoText>• {isEn ? "Animations" : "애니메이션"}</PhotoText>
              </div>
            </div>
            <FixedMobileNav onClick={() => navigate(routeName.second)}>
              Project 2 ✈️
            </FixedMobileNav>
            <NavForProject onClick={() => navigate(routeName.second)}>
              Project 2 ✈️
            </NavForProject>
          </TheBox>
        </ItemBoxLayout>
      </MainBox>
    </DetailLayout>
  );
};

export default Detail_1;
