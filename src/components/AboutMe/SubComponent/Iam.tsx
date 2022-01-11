import React, { useContext } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { LangContext } from "../../../utils/toggleLang";
import { TitleText, Summary, WhoText } from "../../Shared";

const IAM = ["I am ", "_ __"];

export type IndexProp = {
  index: number;
};

const Iam: React.FC<IndexProp> = ({ index }) => {
  const { isEn, toggleIsEn: _ } = useContext(LangContext);
  const FilterIam = ["나는", "__"];
  return (
    <>
      <TitleText>
        <ReactTextTransition
          text={
            isEn ? IAM[index % IAM.length] : FilterIam[index % FilterIam.length]
          }
          springConfig={presets.gentle}
          style={{ margin: "0 4px" }}
          inline
        />
      </TitleText>
      <Summary>
        <WhoText>
          <ReactTextTransition
            text={
              isEn
                ? IAM[index % IAM.length]
                : FilterIam[index % FilterIam.length]
            }
            springConfig={presets.gentle}
            style={{ margin: "0 4px" }}
            inline
          />{" "}
          <span>{isEn ? "a Passionate Person." : "열정적인 사람 입니다."}</span>
          <br />
          <span>
            {isEn
              ? "I have worked in different industry in for a while."
              : "저는 지난 몇년동안 서로다른 직종에서 일을 했습니다."}
          </span>
          <br />
          <span>
            {isEn
              ? 'What I learned from my experience is "Important of Communication".'
              : "저의 경험에서 배운것은 대화 의 중요성 입니다."}
          </span>
          <br />
          <span>
            {isEn ? "Especially" : "특히나"}{" "}
            <ReactTextTransition
              text={IAM[(index + 1) % IAM.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
            />{" "}
            {isEn ? "a great listener." : "훌륭한 청취자 입니다."}
          </span>
          <br />
          <span>
            {isEn
              ? "I like a challenge and don't get scared of brand new things."
              : "저는 새로운것 에 대한 두려움이 없으며 도전을 좋아합니다."}
          </span>
        </WhoText>
      </Summary>
    </>
  );
};

export default Iam;
