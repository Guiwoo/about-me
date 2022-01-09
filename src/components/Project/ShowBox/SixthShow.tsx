import React from "react";
import styled from "styled-components";
import IndexPage from "../../../assets/projectImg/CoffeeApp/Index.png";
import Login from "../../../assets/projectImg/CoffeeApp/Login.png";
import Create from "../../../assets/projectImg/CoffeeApp/Create.png";
import Mobile from "../../../assets/projectImg/CoffeeApp/Mobile.png";
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
          <Img src={IndexPage} />
          <TextCenter>• Home Page</TextCenter>
        </div>
        <div>
          <Img src={Login} />
          <TextCenter>• Login Page</TextCenter>
        </div>
      </ImgBox>
      <ImgBox2>
        <div>
          <Img src={Create} />
          <TextCenter>• Create Page</TextCenter>
        </div>
        <div>
          <Img src={Mobile} />
          <TextCenter>• Mobile</TextCenter>
        </div>
      </ImgBox2>
    </ShowBoxLayout>
  );
};

export default SixthShow;
