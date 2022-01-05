import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

interface CurrentProps {
  readonly current: string;
}

export const Container = styled.div`
  background-image: ${(props) => props.theme.gradient};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Main = styled.main`
  margin: auto;
  border: 1px solid "#1e272e";
  width: 85%;
  height: 83%;
  border-radius: 30px;
  background-color: ${(props) => props.theme.bgColor.second};
  display: flex;
`;

export const NewLink = styled(Link)<CurrentProps>`
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: ${(props) =>
    props.current === "true" ? `1px solid #ffa901` : ""};
  border-radius: 10px;
  &:hover {
    color: #ffa801;
  }
`;

export const GoNextBtn = styled(Link)`
  position: absolute;
  bottom: 10px;
  right: 47%;
  font-size: 18px;
  opacity: 0.6;
  transition: 0.3s all linear;
  &:hover {
    transform: translateY(-10px) scale(1.2);
    color: #ffa801;
  }
`;

const Ascale = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(4) translateX(300px);
    filter: blur(10px);
  }
  50%,
  85% {
    opacity: 0.8;
    transform: scale(1) translateX(0);
    filter: blur(10px);
  }

  100% {
    opacity: 1;
    filter: blur(0px);
  }`;

export const Box = styled.div`
  height: 100%;
  width: 50%;
  animation: ${Ascale} 4s linear forwards;
`;
