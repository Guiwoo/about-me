import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ShowBoxLayout,
  ImgBox,
  ImgBox2,
  ShowTitle,
  TitleBox,
  DefaultIcon,
  Img,
  TextCenter,
  ReactIcon,
} from "./ShowShared";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { aws_address } from "../../../utils/aws";

const PostIcon = styled(DefaultIcon)`
  background: linear-gradient(120deg, #336790, 60%, white);
`;

const GraphQL = styled(DefaultIcon)`
  background: linear-gradient(90deg, #d90493, 60%, white);
`;

const SixthShow = () => {
  return (
    <ShowBoxLayout>
      <ShowTitle>React Movie App • Api</ShowTitle>
      <TitleBox>
        <GraphQL>
          <span style={{ backgroundColor: "inherit" }}>✡️</span> GraphQL
        </GraphQL>
        <PostIcon>
          <FontAwesomeIcon icon={faHippo} /> Postgres
        </PostIcon>
        <ReactIcon />
      </TitleBox>
      <ImgBox>
        <div>
          <Img src={aws_address.coffee.one} />
          <TextCenter>• Home Page</TextCenter>
        </div>
        <div>
          <Img src={aws_address.coffee.three} />
          <TextCenter>• Login Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <Img src={aws_address.coffee.four} />
          <TextCenter>• Create Page</TextCenter>
        </div>
        <div>
          <Img src={aws_address.coffee.five} />
          <TextCenter>• Mobile</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default SixthShow;
