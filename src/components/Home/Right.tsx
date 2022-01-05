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

const Items = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
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
