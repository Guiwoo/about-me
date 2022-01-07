import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faStar } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const StarAnimation = keyframes`
    0%{
        transform: rotate(0)
    }
    50%{
        transform: rotate(35deg);    
    }
    100%{
        transform: rotate(0);
    }
`;

const Icon = styled(FontAwesomeIcon)`
  animation: ${StarAnimation} 3s linear infinite;
  &:hover {
    color: orange;
  }
`;
const Star = styled(Icon)``;
const MenuBtn = styled.button`
  padding: 0;
`;

const Projects = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Container>
        <MenuBtn onClick={() => setShow(!show)}>
          <Icon icon={faStar} color="#ffdd59" />
        </MenuBtn>
        {show ? (
          <div style={{ display: "flex" }}>
            <div>Project1</div>
            <div>Project2</div>
            <div>Project3</div>
            <div>Project4</div>
          </div>
        ) : null}
        <MenuBtn onClick={() => setShow(!show)}>
          <Icon icon={faMoon} color="#c9a309" />
        </MenuBtn>
      </Container>
      <Outlet />
    </>
  );
};

export default Projects;
