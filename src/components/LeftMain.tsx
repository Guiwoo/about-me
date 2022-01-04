import React from "react";
import styled from "styled-components";
import centerImg from "../assets/img/fitSize.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import routeName from "../routeName";

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

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const Description = styled.div``;

const GithubBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ToGitHub = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 40px;
  color: gray;
  font-size: 30px;
`;

const LeftMain = () => {
  return (
    <LeftMainBox>
      <Content>
        <PhotoBox>
          <Image />
        </PhotoBox>
        <Navigation>
          <Description>
            <Link to={routeName.home}>Home</Link>
            <Link to={routeName.me}>About Me</Link>
            <Link to={routeName.projects}>Projects</Link>
          </Description>
        </Navigation>
        <GithubBox>
          <ToGitHub icon={faGithub} />
        </GithubBox>
      </Content>
    </LeftMainBox>
  );
};

export default LeftMain;
