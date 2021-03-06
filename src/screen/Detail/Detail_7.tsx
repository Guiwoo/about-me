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
  TheBox,
  FixedMobileNav,
  NavForProject,
  NavForProjectLeft,
  IisEnProp,
  FixedNav,
} from "./DetailShare";

const cards = [
  aws_address.review.one,
  aws_address.review.two,
  aws_address.review.three,
  aws_address.review.four,
];

const Detail_7: React.FC<IisEnProp> = ({isEn}) => {
  const navigate = useNavigate();
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
          <Description>{isEn ? "• Preview" : "• 미리보기"}</Description>
          <VideoSection videoUrl={aws_address.review.video} />
        </ItemBoxLayout>
        <ItemBoxLayout text={isEn ? "• Details" : "• 세부사항"}>
          <TheBox>
            <ImgText cards={cards} />
            <div
              style={{display: "flex", alignItems: "end", marginLeft: "15px"}}
            >
              <div>
                <PhotoText>• Django & Python</PhotoText>
                <PhotoText>• Models Design</PhotoText>
                <PhotoText>• Admin Pannel</PhotoText>
                <PhotoText>• Tailwind Css </PhotoText>
              </div>
            </div>
            <FixedMobileNav onClick={() => navigate(routeName.projects)}>
              Projects ✈️
            </FixedMobileNav>
          </TheBox>
        </ItemBoxLayout>
      </MainBox>
      <FixedNav>
        <NavForProjectLeft onClick={() => navigate(routeName.sixth)}>
          ✈️ Projects 6
        </NavForProjectLeft>
        <NavForProject onClick={() => navigate(routeName.projects)}>
          Projects ✈️
        </NavForProject>
      </FixedNav>
    </DetailLayout>
  );
};

export default Detail_7;
