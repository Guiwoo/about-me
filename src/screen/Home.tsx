import React from "react";
import styled, { keyframes } from "styled-components";
import bg1 from "../assets/img/bgBlack.png";
import HomeLeft from "../components/Home/Left";
import HomeRight from "../components/Home/Right";
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
  position: relative;
`;

const GoNextMove = keyframes``;

const GoNext = styled.button`
  position: absolute;
  bottom: 10px;
  right: 43%;
  font-size: 18px;
  opacity: 0.6;
  transition: 0.5s all linear;
  &:hover {
    transform: translateY(-10px) scale(1.2);
    color: #ffa801;
  }
`;

const Home = () => {
  // useIntervalTitle(0, 50); /* uncomment before deploy */
  return (
    <Container>
      <HomeLeft />
      <HomeRight />
      <GoNext>About Me</GoNext>
    </Container>
  );
};

export default Home;
