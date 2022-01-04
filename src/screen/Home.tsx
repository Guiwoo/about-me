import React from "react";
import styled from "styled-components";
import bg1 from "../assets/img/bgBlack.png";

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

const Right = styled.section`
  width: 50%;
  background-color: yellow;
`;

const Home = () => {
  return (
    <Container>
      <Left>
        <div>
          <ThickSpan>Hello,</ThickSpan>
          <ThickSpan>I'm Guiwoo Park</ThickSpan>
        </div>
        <div></div>
      </Left>
      <Right>hi</Right>
    </Container>
  );
};

export default Home;
