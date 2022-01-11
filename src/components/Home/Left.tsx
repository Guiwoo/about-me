import React, { useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useIntervalTitle } from "../../utils/hooks";
import { device } from "../../utils/resize";
import routeName from "../../utils/routeName";
import { LangContext } from "../../utils/toggleLang";
import { MobileNav } from "../Shared";

const Left = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ThickSpan = styled.span`
  display: block;
  font-size: 50px;
  margin-bottom: 40px;
  font-weight: 600;
`;

const TinySpanBox = styled.div`
  @media ${device.mobile} {
    opacity: 0.7;
  }
  @media ${device.laptop} {
    position: absolute;
    opacity: 0.7;
    margin-top: 40px;
  }

  @media ${device.desktop} {
    //need to fix with over 27 monitor
  }
`;

const TinySpan = styled.span`
  display: block;
  margin: 20px 0px;
`;

const HomeLeft = () => {
  const { isEn, toggleIsEn: _ } = useContext(LangContext);
  useIntervalTitle(0, 40); /* uncomment before deploy */
  const navigation = useNavigate();
  return (
    <Left>
      <div>
        <div>
          <ThickSpan>{isEn ? "Hello ," : "안녕하세요 ,"}</ThickSpan>
          <ThickSpan>
            {isEn ? "I'm Guiwoo Park" : "저는 박귀우 입니다. "}
          </ThickSpan>
        </div>
        <TinySpanBox>
          <TinySpan>
            {isEn
              ? "Don't give up, I can do whatever I want."
              : "포기하지 말자, 내가원하는 뭐든 할수있다."}
          </TinySpan>
          <TinySpan>
            {isEn
              ? "Always Do my best, Happy Coding"
              : "항상 최선을 다하자, 행복하게 코딩 하자!"}
          </TinySpan>
        </TinySpanBox>
      </div>
      <MobileNav onClick={() => navigation(routeName.me)}>
        About Me ✈️
      </MobileNav>
    </Left>
  );
};

export default HomeLeft;
