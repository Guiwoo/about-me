import React from "react";
import styled from "styled-components";
import centerImg from "../assets/img/fitSize.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Navigation from "./Navigation";

const LeftMainBox = styled.section`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  margin: 30px 0px;
  position: relative;
`;

const PhotoBox = styled.div``;

const Image = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${centerImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

const Nametag = styled.div`
  margin-top: 10px;
  font-size: 24px;
  text-align: center;
`;

const GithubBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  transform: translateY(400%);
`;

const ToGitHub = styled(FontAwesomeIcon)`
  bottom: 40px;
  color: gray;
  font-size: 30px;
  &:hover {
    color: #ffa801;
  }
`;

const LeftMain = () => {
  return (
    <LeftMainBox>
      <Content>
        <PhotoBox>
          <Image />
        </PhotoBox>
        <Nametag>Guiwoo Park</Nametag>
        <Navigation />
        <GithubBox>
          <a href="https://github.com/guiwoo">
            <ToGitHub icon={faGithub} />
          </a>
        </GithubBox>
      </Content>
    </LeftMainBox>
  );
};

export default LeftMain;
