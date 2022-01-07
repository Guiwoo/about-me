import React from "react";
import styled from "styled-components";
import ReactTextTransition, { presets } from "react-text-transition";
import { TitleText, Summary, WhoText } from "../../Shared";

const IAM = ["I am ", "_ __"];

export type IndexProp = {
  index: number;
};

const Iam: React.FC<IndexProp> = ({ index }) => {
  return (
    <>
      <TitleText>
        <ReactTextTransition
          text={IAM[index % IAM.length]}
          springConfig={presets.gentle}
          style={{ margin: "0 4px" }}
          inline
        />
      </TitleText>
      <Summary>
        <WhoText>
          <ReactTextTransition
            text={IAM[(index + 1) % IAM.length]}
            springConfig={presets.gentle}
            style={{ margin: "0 4px" }}
            inline
          />{" "}
          <span>a Passionate Person.</span>
          <br />
          <span>I have worked in different industry in for a while.</span>
          <br />
          <span>What I learned from my experience is "Conversation".</span>
          <br />
          <span>
            Especially{" "}
            <ReactTextTransition
              text={IAM[(index + 1) % IAM.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
            />{" "}
            a great listener.
          </span>
          <br />
          <span>
            I like a challenge and don't get scared of brand new things.
          </span>
        </WhoText>
      </Summary>
    </>
  );
};

export default Iam;
