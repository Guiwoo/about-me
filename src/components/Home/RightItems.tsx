import React from "react";
import styled, {keyframes} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import {
  faHtml5,
  faNodeJs,
  faJs,
  faCss3,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {faHippo, faLeaf} from "@fortawesome/free-solid-svg-icons";

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
  display: flex;
  flex-direction: column;
`;
//Django Animation

const DajngoMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: linear-gradient( #082D1F,60% ,#00d4ff);
        transform: translateX(-150px) translateY(100px);
    }
`;

const SDjango = styled(Items)`
  width: 70px;
  height: 70px;
  animation: ${DajngoMove} 2.2s linear forwards;
`;

export const Django = () => <SDjango>Django</SDjango>;

//Python Animation

const PythonMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: linear-gradient( 50deg,#3ba2f7,60% ,#F6CE35);
        transform: translateX(-100px) translateY(50px);
    }
`;

const SPython = styled(Items)`
  width: 70px;
  height: 70px;
  animation: ${PythonMove} 1.6s linear forwards;
`;

export const Python = () => (
  <SPython>
    <FontAwesomeIcon icon={faPython} size="4x" />
  </SPython>
);

//MongoDb Animation

const MongoDBMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: linear-gradient( 70deg,#449A43,60% ,white);
        transform: translateX(-150px) translateY(-250px);
    }
`;
const SMongoDB = styled(Items)`
  width: 70px;
  height: 70px;
  animation: ${MongoDBMove} 1.8s linear forwards;
`;

export const MongoDb = () => (
  <SMongoDB>
    <FontAwesomeIcon icon={faLeaf} size="3x" />
    <span>Mongo DB</span>
  </SMongoDB>
);

//PostSQL Animation

const PostSqlMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: linear-gradient( 120deg,#336790,60% ,white);
        transform: translateX(-180px) translateY(-150px);
    }
`;
const PostSql = styled(Items)`
  width: 80px;
  height: 80px;
  animation: ${PostSqlMove} 1.7s linear forwards;
`;

export const PostSQL = () => (
  <PostSql>
    <FontAwesomeIcon icon={faHippo} size="3x" />
    <span>PostgresSql</span>
  </PostSql>
);

//GraphQL Animation..

const GraphQlMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: linear-gradient( 90deg,#D90493,60% ,white);
        transform: translateX(-90px) translateY(-70px);
    }
`;
const SGraphQL = styled(Items)`
  width: 70px;
  height: 70px;
  animation: ${GraphQlMove} 1.6s linear forwards;
`;

export const GraphQL = () => (
  <SGraphQL>
    <HexagonOutlinedIcon sx={{color: "white"}} fontSize="large" />
    <span>GrpahQL</span>
  </SGraphQL>
);

//React Native Animation..

const RNMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: radial-gradient(circle, rgba(3,209,247,1) 0%, rgba(218,218,218,1) 100%);
        transform: translateX(100px) translateY(150px);
    }
`;
const SRn = styled(Items)`
  width: 80px;
  height: 80px;
  animation: ${RNMove} 1.8s linear forwards;
`;

export const Rn = () => (
  <SRn>
    <FontAwesomeIcon icon={faReact} size="3x" />
    <span>
      React
      <br /> Native
    </span>
  </SRn>
);

// TypeScript Animation

const TsMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: radial-gradient(circle, rgba(47,115,191,1) 0%, rgba(148,187,233,1) 100%);
        transform: translateX(120px) translateY(-200px);
    }
`;
const STs = styled(Items)`
  width: 70px;
  height: 70px;
  animation: ${TsMove} 1.7s linear forwards;
  font-size: 25px;
`;

export const Ts = () => <STs>Ts</STs>;

// NodeJs Animation

const NodeMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: radial-gradient(circle, rgba(59,129,60,1) 0%, rgba(8,51,0,1) 100%);
        transform: translateX(100px) translateY(-250px);
    }
`;
const Node = styled(Items)`
  width: 50px;
  height: 50px;
  animation: ${NodeMove} 1.8s linear forwards;
`;

export const NodeJs = () => (
  <Node>
    <FontAwesomeIcon icon={faNodeJs} size="4x" />
  </Node>
);

//React

const ReactMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: radial-gradient(circle, rgba(90,200,230,1) 50%, rgba(125,125,125,1) 100%);
        transform: translateX(70px) translateY(-165px);
    }
`;
const SRct = styled(Items)`
  width: 70px;
  height: 70px;
  animation: ${ReactMove} 1.5s linear forwards;
`;

export const Rct = () => (
  <SRct>
    <FontAwesomeIcon icon={faReact} size="4x" />
  </SRct>
);

//Js Animation

const JsMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: radial-gradient(circle, rgba(239,216,29,1) 0%, rgba(97,97,97,1) 100%);
        transform: translateX(50px) translateY(-90px);
    }
`;
const SJs = styled(Items)`
  width: 70px;
  height: 70px;
  animation: ${JsMove} 1.4s linear forwards;
`;

export const JsBox = () => (
  <SJs>
    <FontAwesomeIcon icon={faJs} size="4x" />
  </SJs>
);

//Css Animation

const CssMove = keyframes`
    0%{
        transfrom: translateX(0) translateY(0)
    }
    100%{
        background: linear-gradient(90deg, rgba(3,112,181,1) 0%, rgba(3,145,212,1) 50%);
        transform: translateX(130px) translateY(-10px);
    }
`;
const SCss = styled(Items)`
  width: 60px;
  height: 60px;
  animation: ${CssMove} 1.4s linear forwards;
`;

export const Css = () => (
  <SCss>
    <FontAwesomeIcon icon={faCss3} size="4x"></FontAwesomeIcon>
  </SCss>
);

//Html

const SHtml = styled(Items)`
  background: linear-gradient(
    90deg,
    rgba(222, 8, 1, 1) 0%,
    rgba(232, 99, 42, 1) 50%
  );
`;

export const HtmlBox = () => (
  <SHtml>
    <FontAwesomeIcon icon={faHtml5} size="4x" />
  </SHtml>
);
