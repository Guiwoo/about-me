import React from "react";
import styled from "styled-components";

const Left = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThickSpan = styled.span`
  display: block;
  font-size: 50px;
  margin-bottom: 40px;
  font-weight: 600;
`;

const TinySpanBox = styled.div`
  margin-top: 40px;
  position: absolute;
  opacity: 0.7;
`;

const TinySpan = styled.span`
  display: block;
  margin: 20px 0px;
`;

const HomeLeft = () => {
  return (
    <Left>
      <div>
        <div>
          <ThickSpan>Hello,</ThickSpan>
          <ThickSpan>I'm Guiwoo Park</ThickSpan>
        </div>
        <TinySpanBox>
          <TinySpan>Don't give up, do whatever I want.</TinySpan>
          <TinySpan>Do my best, Happy Coding</TinySpan>
        </TinySpanBox>
      </div>
    </Left>
  );
};

export default HomeLeft;
