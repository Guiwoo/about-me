import React from "react";
import styled from "styled-components";
import HomeLeft from "../components/Home/Left";
import HomeRight from "../components/Home/Right";
import { BgContainer, GoNext } from "../components/Shared";
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
      <GoNext routeName={routeName.me} title={"About Me"} />
    </Container>
  );
};

export default Home;
