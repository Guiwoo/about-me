import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import bg1 from "../assets/img/bgBlack.png";
import { useIntervalTitle } from "../hooks";

const Container = styled.div`
  display: flex;
  border-radius: 30px;
  background-image: url(${bg1});
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: none;
  background-size: cover;
`;

const Left = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThickSpan = styled.span`
  display: block;
  font-size: 50px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const TinySpan = styled.span`
  display: block;
  margin-top: 40px;
`;

const Right = styled.section`
  width: 50%;
  background-color: yellow;
`;

const Home = () => {
  // useIntervalTitle(0, 200); uncomment before deploy
  return (
    <Container>
      <Left>
        <div>
          <ThickSpan>Hello,</ThickSpan>
          <ThickSpan>I'm Guiwoo Park</ThickSpan>
          <div>
            <TinySpan>Don't give up, do whatever I want.</TinySpan>
          </div>
        </div>
      </Left>
      <Right>hi</Right>
    </Container>
  );
};

export default Home;
