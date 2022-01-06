import React from "react";
import styled from "styled-components";
import bg1 from "../assets/img/bgBlack.png";
import HomeLeft from "../components/Home/Left";
import HomeRight from "../components/Home/Right";
import { GoNextBtn, BgContainer } from "../components/Shared";
import routeName from "../routeName";

const Container = styled(BgContainer)`
  display: flex;
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
