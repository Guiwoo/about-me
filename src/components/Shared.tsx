import React from "react";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import ReactTextTransition, {presets} from "react-text-transition";
import {device} from "../utils/resize";

interface CurrentProps {
  readonly current?: string | undefined;
  readonly routeName?: string | undefined;
  readonly title?: string | undefined;
}

interface NextPageProps {
  routeName: string;
  title: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.theme.gradient};
  @media ${device.mobile} {
    height: 100%;
  }
  @media ${device.tablet} {
    height: 100%;
  }
  @media ${device.laptop} {
    height: 100vh;
  }

  @media ${device.desktop} {
  }
`;

export const BgContainer = styled.div`
  border-radius: 30px;
  position: relative;
`;

export const Main = styled.main`
  margin: auto;
  border: 1px solid ${(props) => props.theme.border.main};
  width: 85%;
  height: 83%;
  border-radius: 30px;
  background-color: ${(props) => props.theme.bgColor.second};
  display: flex;
  @media ${device.mobile} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

const Arrow = ["↓", "✈️"];

export const NewLink = styled(Link)<CurrentProps>`
  display: block;
  padding: 10px;
  border-bottom: ${(props) =>
    props.current === "true" ? `1px solid white` : ""};
  border-radius: 10px;
  &:hover {
    color: ${(props) => props.theme.underline.main};
  }
`;
const GoNextBtn = styled(Link)`
  position: absolute;
  bottom: 10%;
  right: 8%;
  font-size: 14px;
  opacity: 0.6;
  transition: 0.3s all linear;
  &:hover {
    transform: translateY(-10px) scale(1.2);
    color: ${(props) => props.theme.underline.main};
  }
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }

  @media ${device.desktop} {
    display: block;
  }
`;

export const GoNext = ({routeName, title}: NextPageProps) => {
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
        style={{margin: "0 4px"}}
        inline
      />
      <ReactTextTransition
        text={Arrow[index % Arrow.length]}
        springConfig={presets.gentle}
        style={{margin: "0 4px"}}
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
  color: ${(props) => props.theme.fontColor.main};
`;

export const Summary = styled.div`
  font-size: 12px;
  line-height: 1.6;
  @media ${device.laptop} {
    font-size: 14px;
  }

  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const WhoText = styled.span`
  display: inline-block;
  margin-left: 18px;
  color: ${(props) => props.theme.fontColor.sub};
`;

export const MobileNav = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
  font-size: 12px;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    color: orange;
  }

  @media ${device.laptop} {
    display: none;
  }

  @media ${device.desktop} {
    display: none;
  }
`;
