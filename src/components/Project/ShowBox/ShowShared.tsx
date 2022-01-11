import React, { ReactChild, ReactChildren } from "react";
import {
  faCss3,
  faHtml5,
  faJs,
  faMediumM,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { TitleText } from "../../Shared";
import { device } from "../../../utils/resize";

interface AuxProps {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const ShowBox = styled.div`
  width: 600px;
  height: 400px;
  margin-left: 10px;
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

const Container = styled.div`
  padding: 10px;
`;

export const ShowBoxLayout = ({ children }: AuxProps) => {
  return (
    <ShowBox>
      <Container>{children}</Container>
    </ShowBox>
  );
};

export const ImgBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ImgBox2 = styled(ImgBox)`
  margin-top: 10px;
`;

export const Img = styled.img`
  width: 70%;
  height: 70%;
`;

export const NewImg = styled(Img)`
  width: 150px;
  height: 180px;
`;

export const ShowTitle = styled(TitleText)`
  margin: 0 0 5px 0;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const DefaultIcon = styled.div`
  border-radius: 2px;
  margin-right: 5px;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

const SReactIcon = styled(DefaultIcon)`
  background: radial-gradient(
    circle,
    rgba(3, 209, 247, 1) 0%,
    rgba(218, 218, 218, 1) 100%
  );
`;

export const ReactIcon = () => (
  <SReactIcon>
    <FontAwesomeIcon icon={faReact} /> React
  </SReactIcon>
);
const SJsIcon = styled(DefaultIcon)`
  background: radial-gradient(
    circle,
    rgba(239, 216, 29, 1) 0%,
    rgba(97, 97, 97, 1) 100%
  );
`;

export const JsIcon = () => (
  <SJsIcon>
    <FontAwesomeIcon icon={faJs} /> JavaScript
  </SJsIcon>
);

const IMDB = styled(DefaultIcon)`
  background: linear-gradient(70deg, #7eccaa, 60%, #0ab7dd);
`;

export const ImdbIcon = () => (
  <IMDB>
    <FontAwesomeIcon icon={faMediumM} /> IMDB
  </IMDB>
);

const SHtmlIcon = styled(DefaultIcon)`
  background: linear-gradient(
    90deg,
    rgba(222, 8, 1, 1) 0%,
    rgba(232, 99, 42, 1) 50%
  );
`;
const SCssIcon = styled(DefaultIcon)`
  background: linear-gradient(
    90deg,
    rgba(3, 112, 181, 1) 0%,
    rgba(3, 145, 212, 1) 50%
  );
`;

export const HtmlIcon = () => (
  <SHtmlIcon>
    <FontAwesomeIcon icon={faHtml5} /> HTML
  </SHtmlIcon>
);

export const CssIcon = () => (
  <SCssIcon>
    <FontAwesomeIcon icon={faCss3} /> CSS
  </SCssIcon>
);
