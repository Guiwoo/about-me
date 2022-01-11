import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { device } from "../resize";
import routeName from "../routeName";

const SNavigation = styled.div`
  @media ${device.mobile} {
    display: block;
    position: fixed;
    top: 0;
    right: 10%;
    padding: 20px;
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
  &:hover {
    color: orange;
  }
`;
const MenuBox = styled.div``;

const Navigations = styled.div`
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    color: orange;
  }
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
        <MenuBox>
          <Navigations onClick={() => navigaetClick(routeName.home)}>
            Home
          </Navigations>
          <Navigations onClick={() => navigaetClick(routeName.me)}>
            About Me
          </Navigations>
          <Navigations onClick={() => navigaetClick(routeName.projects)}>
            Projects
          </Navigations>
        </MenuBox>
      ) : (
        <BurgerBox onClick={clickBurger}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </BurgerBox>
      )}
    </SNavigation>
  );
};

export default BurgerMenu;
