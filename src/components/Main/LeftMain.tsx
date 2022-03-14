import React, {useContext} from "react";
import styled, {keyframes} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Navigation from "../Navigation";
import {faMicrosoft} from "@fortawesome/free-brands-svg-icons";
import {faMobileAlt, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from "../BurgerMenu";
import {device} from "../../utils/resize";
import {aws_address} from "../../utils/aws";
import {LangContext} from "../../utils/toggleLang";
import {useRecoilState} from "recoil";
import {darkState} from "../../utils/recoilAtom";

const LeftMainBox = styled.section`
  display: flex;
  justify-content: center;
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 20%;
    height: 100%;
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
  color: ${(props) => props.theme.underline.main};
  animation: ${Rotating} 10s linear infinite;
`;
const DarkLightMode = styled.div`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.underline.main};
  }
`;

const Nametag = styled.div`
  margin-top: 10px;
  font-size: 24px;
  text-align: center;
`;

const ContactBoxes = styled.div`
  @media ${device.laptop} {
  }
  @media ${device.desktop} {
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
    color: ${(props) => props.theme.underline.main};
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
    color: ${(props) => props.theme.underline.main};
  }
`;

const ChangeLanguage = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  opacity: 0.7;
  @media ${device.laptop} {
    justify-content: flex-end;
  }
`;

const En = styled.div`
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.underline.main};
  }
`;

const LeftMain = () => {
  const [isDark, setIsDark] = useRecoilState(darkState);
  const {isEn, toggleIsEn} = useContext(LangContext);
  const CopyText = (e: any) => {
    const textValue = e.target.innerText;
    navigator.clipboard.writeText(textValue);
    e.target.innerText = "Copied !";
    setTimeout(() => {
      e.target.innerText = textValue;
    }, 1500);
  };
  const toggleDark = () => {
    const amIdark = localStorage.getItem("DARK");
    if (amIdark === "true") {
      localStorage.setItem("DARK", "false");
    } else {
      localStorage.setItem("DARK", "true");
    }
    return setIsDark(!isDark);
  };
  return (
    <LeftMainBox>
      <Content>
        <ChangeLanguage>
          <En onClick={toggleIsEn}>{isEn ? "한국어" : "En"}</En>
          <DarkLightMode onClick={toggleDark}>
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </DarkLightMode>
        </ChangeLanguage>
        <div>
          <PhotoBox>
            <Image>
              <IconMoon icon={isDark ? faMoon : faSun} />
            </Image>
          </PhotoBox>
          <Nametag>{isEn ? "Guiwoo Park" : "박귀우"}</Nametag>
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
              <div style={{display: "flex"}}>
                <FontAwesomeIcon icon={faMobileAlt} />
                <ContactSpan onClick={CopyText}>010-7106-8657</ContactSpan>
              </div>
              <div style={{display: "flex"}}>
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
