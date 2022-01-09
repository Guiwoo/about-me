import { faMoon, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { keyframes } from "styled-components";
import { isPropertyAssignment } from "typescript";

type isOpenProps = {
  readonly isopen: string;
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

const MoonMove = keyframes`
    0%{
      transform:translateX(560px);
      color:yellow
    }100%{
      color:red
    }
  `;

const Icon = styled(FontAwesomeIcon)`
  animation: ${StarAnimation} 2s linear infinite;
  &:hover {
    color: orange;
  }
`;

const Moon = styled(Icon)<isOpenProps>`
  animation: ${(props) => (props.isopen === "true" ? MoonMove : StarAnimation)}
    2s linear ${(props) => (props.isopen === "true" ? "forwards" : "infinites")};
`;
const MenuBtn = styled.button`
  padding: 0;
`;
const MenuSpan = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  font-size: 12px;
  cursor: pointer;
`;

const BarMenu = styled.div`
  margin: 0px 8px;
  opacity: 0.5;
`;

const ShowAnimation = keyframes`
    0%{
      transform: translate(-50px,-20px);
    }
    50%{
      opacity:0
    }
    75%{
      opacity:0.5
    }
    100%{
      transform: translate(0);
      opacity:1;
    }
  `;

const FirstMenu = styled(BarMenu)`
  opacity: 0;
  animation: ${ShowAnimation} 0.3s linear forwards;
  animation-delay: 1.8s;
`;
const SecondMenu = styled(FirstMenu)`
  animation-delay: 1.6s;
`;
const ThirdMenu = styled(FirstMenu)`
  animation-delay: 1.3s;
`;
const FourthMenu = styled(FirstMenu)`
  animation-delay: 1s;
`;
const FifthMenu = styled(FirstMenu)`
  animation-delay: 0.7s;
`;
const SixMenu = styled(FirstMenu)`
  animation-delay: 0.4s;
`;
const SevenMenu = styled(FirstMenu)`
  animation-delay: 0.1s;
`;

const HeaderMenu = (props: any) => {
  const [show, setShow] = React.useState(false);
  const { isopen, ...rest } = props;
  return (
    <>
      <Container {...rest}>
        {!show ? (
          <MenuSpan onClick={() => setShow(!show)}>See All</MenuSpan>
        ) : null}
        <MenuBtn onClick={() => setShow(!show)}>
          <Moon isopen={show.toString()} icon={faStar} color="#ffdd59" />
        </MenuBtn>
        {show ? (
          <div style={{ display: "flex" }}>
            <FirstMenu>Project 1</FirstMenu>
            <SecondMenu>Project 2</SecondMenu>
            <ThirdMenu>Project 3</ThirdMenu>
            <FourthMenu>Project 4</FourthMenu>
            <FifthMenu>Project 5</FifthMenu>
            <SixMenu>Project 6</SixMenu>
            <SevenMenu>Project 7</SevenMenu>
          </div>
        ) : null}
        <MenuBtn onClick={() => setShow(!show)}>
          <Icon icon={faMoon} color="#c9a309" />
        </MenuBtn>
      </Container>
    </>
  );
};

export default HeaderMenu;
