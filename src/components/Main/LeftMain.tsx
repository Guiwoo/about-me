import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Navigation from "../Navigation";
import { aws_address } from "../../aws";
import { device } from "../../resize";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faMoon } from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from "../BurgerMenu";

const LeftMainBox = styled.section`
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 20%;
    height: 100vh;
  }

  @media ${device.desktop} {
    width: 20%;
    height: 100vh;
  }
`;
const Content = styled.div`
  margin: 30px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const PhotoBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${aws_address.img.meCircle});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Rotating = keyframes`
  0%{
    transform: rotate(0) translateX(5px) translateY(80px); 
  }
  25%{
    transform: rotate(90deg) translateY(80px) translateX(5px)
  }
  75%{
    transform: rotate(180deg) translateY(80px) translateX(5px)
  }
  100%{
    transform: rotate(360deg) translateY(80px) translateX(5px);
  }
`;

const IconMoon = styled(FontAwesomeIcon)`
  color: #ffc048;
  animation: ${Rotating} 10s linear infinite;
`;

const Nametag = styled.div`
  margin-top: 10px;
  font-size: 24px;
  text-align: center;
`;

const ContactBoxes = styled.div`
  @media ${device.mobile} {
    transform: translateY(0px);
  }
  @media ${device.laptop} {
    transform: translateY(150px);
  }

  @media ${device.desktop} {
    transform: translateY(150px);
  }
`;

const GithubBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ToGitHub = styled(FontAwesomeIcon)`
  bottom: 40px;
  color: gray;
  font-size: 30px;
  &:hover {
    color: #ffa801;
  }
`;

const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.6);
`;

const ContactSpan = styled.div`
  margin: 5px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;

const LeftMain = () => {
  const CopyText = (e: any) => {
    const textValue = e.target.innerText;
    navigator.clipboard.writeText(textValue);
    e.target.innerText = "Copied !";
    setTimeout(() => {
      e.target.innerText = textValue;
    }, 1500);
  };
  return (
    <LeftMainBox>
      <Content>
        <div>
          <PhotoBox>
            <Image>
              <IconMoon icon={faMoon} />
            </Image>
          </PhotoBox>
          <Nametag>Guiwoo Park</Nametag>
        </div>
        <div>
          <Navigation />
          <BurgerMenu />
          <ContactBoxes>
            <GithubBox>
              <a href="https://github.com/guiwoo">
                <ToGitHub icon={faGithub} />
              </a>
            </GithubBox>
            <ContactBox>
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon icon={faMobileAlt} />
                <ContactSpan onClick={CopyText}>010-7106-8657</ContactSpan>
              </div>
              <div style={{ display: "flex" }}>
                <FontAwesomeIcon icon={faMicrosoft} />
                <ContactSpan onClick={CopyText}>
                  Park.guiwoo@hotmail.com
                </ContactSpan>
              </div>
            </ContactBox>
          </ContactBoxes>
        </div>
      </Content>
    </LeftMainBox>
  );
};

export default LeftMain;
