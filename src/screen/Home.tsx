import React from "react";
import styled from "styled-components";
import bg1 from "../assets/img/bgBlack.png";
import HomeLeft from "../components/Home/Left";
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

const Right = styled.section`
  width: 50%;
  background-color: yellow;
`;

const Home = () => {
  // useIntervalTitle(0, 100); /* uncomment before deploy */
  return (
    <Container>
      <HomeLeft />
      <Right>hi</Right>
    </Container>
  );
};

export default Home;
