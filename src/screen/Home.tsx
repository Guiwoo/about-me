import React from "react";
import styled from "styled-components";
import HomeLeft from "../components/Home/Left";
import HomeRight from "../components/Home/Right";
import {BgContainer} from "../components/Shared";

const Container = styled(BgContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <HomeLeft />
      <HomeRight />
    </Container>
  );
};

export default Home;
