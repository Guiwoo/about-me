import React, { useContext } from "react";
import { LangContext } from "../../../utils/toggleLang";
import { TitleText, Summary, WhoText } from "../../Shared";

const Goal = () => {
  const { isEn } = useContext(LangContext);
  return (
    <>
      <TitleText>
        {isEn ? "What's My " : "나의"}
        <mark>{isEn ? "GOAL" : '"목표"'}</mark> ?
      </TitleText>
      <Summary>
        <WhoText>
          {isEn
            ? "• Frontend Developer - Create Creativity WebSite"
            : "프론트엔드 - 나만의 창의적인 웹사이트 개발하기"}{" "}
          <br />
          {isEn
            ? "• FullStack Developer, Service My Own Business"
            : "풀스택 - 나의 사업 운영하기"}
        </WhoText>
      </Summary>
    </>
  );
};

export default Goal;
