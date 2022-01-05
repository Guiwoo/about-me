import React from "react";
import styled from "styled-components";
import bg1 from "../assets/img/bgBlack.png";
import HomeLeft from "../components/Home/Left";
import HomeRight from "../components/Home/Right";
import { GoNextBtn } from "../components/Shared";
import routeName from "../routeName";

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

const Home = () => {
  return (
    <Container>
      <HomeLeft />
      <HomeRight />
      <GoNextBtn to={routeName.me}>About Me</GoNextBtn>
    </Container>
  );
};

export default Home;
