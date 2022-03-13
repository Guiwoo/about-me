import {keyframes} from "@emotion/react";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useNavigate} from "react-router";
import styled from "styled-components";
import {device} from "../utils/resize";
import routeName from "../utils/routeName";

const SNavigation = styled.div`
  @media ${device.mobile} {
    display: block;
    position: fixed;
    top: 0;
    right: 10%;
    z-index: 10;
  }
  @media ${device.laptop} {
    display: none;
  }

  @media ${device.desktop} {
    display: none;
  }
`;

const BurgerBox = styled.div`
  cursor: pointer;
  background-color: #44616c;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  top: 3vh;
  &:hover {
    color: orange;
    background-color: #393e3f;
  }
`;

const Menuanimation = keyframes`
  from{
    transform: scale(0)
  }to{
    transform:scale(1)
  }
`;

const MenuBox = styled.div`
  padding: 20px 5px;
  height: 20vh;
  box-shadow: 2px 2px 5px white;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(30, 39, 46, 1) 0%,
    rgba(52, 61, 74, 1) 100%
  );
  animation: ${Menuanimation} 1.4s linear forwards;
`;

const Navigations = styled.div`
  padding: 12px 0px;
  cursor: pointer;
  &:hover {
    color: orange;
    background-color: #393e3f;
  }
`;
const Cover = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
`;

const BurgerMenu = () => {
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  const clickBurger = () => setShow(true);
  const navigaetClick = (url: string) => {
    setShow(false);
    return navigate(url);
  };
  return (
    <SNavigation>
      {show ? (
        <Cover onClick={() => setShow(false)}>
          <MenuBox>
            <Navigations onClick={() => navigaetClick(routeName.home)}>
              • Home
            </Navigations>
            <Navigations onClick={() => navigaetClick(routeName.me)}>
              • About Me
            </Navigations>
            <Navigations onClick={() => navigaetClick(routeName.projects)}>
              • Projects
            </Navigations>
          </MenuBox>
        </Cover>
      ) : (
        <BurgerBox onClick={clickBurger}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </BurgerBox>
      )}
    </SNavigation>
  );
};

export default BurgerMenu;
