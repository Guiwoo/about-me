import React from "react";
import styled from "styled-components";
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

const CenterArea = styled.div``;

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
