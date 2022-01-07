import React from "react";
import styled from "styled-components";
import { TitleText, Summary, WhoText } from "../../Shared";

const Goal = () => {
  return (
    <>
      <TitleText>
        What's My <mark>GOAL</mark> ?
      </TitleText>
      <Summary>
        <WhoText>
          • Frontend Developer - Create Creativity WebSite <br />• FullStack
          Developer, Service My Own Business
        </WhoText>
      </Summary>
    </>
  );
};

export default Goal;
