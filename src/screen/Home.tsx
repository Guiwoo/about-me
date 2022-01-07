import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import HomeLeft from "../components/Home/Left";
import HomeRight from "../components/Home/Right";
import { BgContainer, GoNext } from "../components/Shared";
import routeName from "../routeName";

const Container = styled(BgContainer)`
  display: flex;
  position: relative;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <div style={{ display: "flex", width: "100%" }}>
        <HomeLeft />
        <HomeRight />
      </div>
    </Container>
  );
};

export default Home;
