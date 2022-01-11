import React from "react";
import styled from "styled-components";
import { device } from "../../utils/resize";
import {
  Django,
  GraphQL,
  MongoDb,
  NodeJs,
  PostSQL,
  Python,
  Rct,
  Rn,
  Ts,
  JsBox,
  Css,
  HtmlBox,
} from "./RightItems";

const Right = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterArea = styled.div`
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

const HomeRight = () => {
  return (
    <Right>
      <CenterArea>
        <HtmlBox />
        <Css />
        <JsBox />
        <Rct />
        <NodeJs />
        <Ts />
        <Rn />
        <GraphQL />
        <PostSQL />
        <MongoDb />
        <Python />
        <Django />
      </CenterArea>
    </Right>
  );
};

export default HomeRight;
