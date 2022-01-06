import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import bg1 from "../assets/img/bgBlack.png";
import ReactTextTransition, { presets } from "react-text-transition";

interface CurrentProps {
  readonly current?: string | undefined;
  routeName?: string | undefined;
  title?: string | undefined;
}

interface NextPageProps {
  routeName: string;
  title: string;
}

export const Container = styled.div`
  background-image: ${(props) => props.theme.gradient};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BgContainer = styled.div`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: none;
  background-size: cover;
  background-image: url(${bg1});
  position: relative;
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

const Arrow = ["↓", "✈️"];

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
const GoNextBtn = styled(Link)`
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

export const GoNext = ({ routeName, title }: NextPageProps) => {
  const [index, setIndex] = React.useState(0);
  const [delay, setDelay] = React.useState(true);
  const m = /[a-zA-Z]/gi;
  const TheTitle = [`${title}`, `${title.replaceAll(m, "_")}`];
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1000 // every 3 seconds
    );
    setTimeout(() => setDelay(false), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return delay ? null : (
    <GoNextBtn to={routeName}>
      <ReactTextTransition
        text={TheTitle[index % TheTitle.length]}
        springConfig={presets.gentle}
        style={{ margin: "0 4px" }}
        inline
      />
      <ReactTextTransition
        text={Arrow[index % Arrow.length]}
        springConfig={presets.gentle}
        style={{ margin: "0 4px" }}
        inline
      />
    </GoNextBtn>
  );
};

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
  padding: 0px 5px;
  animation: ${Ascale} 4s linear forwards;
`;

export const TitleText = styled.div`
  margin: 10px 0px;
  font-weight: 600;
  font-size: 18px;
`;
