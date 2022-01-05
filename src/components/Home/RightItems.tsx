import React from "react";
import styled, { keyframes } from "styled-components";

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
  animation: ${DajngoMove} 0.6s linear forwards;
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
  animation: ${PythonMove} 0.4s linear forwards;
`;

export const Python = () => <SPython>Python</SPython>;

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
  animation: ${MongoDBMove} 0.6s linear forwards;
`;

export const MongoDb = () => <SMongoDB>MongoDB</SMongoDB>;

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
  animation: ${PostSqlMove} 0.5s linear forwards;
`;

export const PostSQL = () => <PostSql>PostgresSQL</PostSql>;

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
  animation: ${GraphQlMove} 0.4s linear forwards;
`;

export const GraphQL = () => <SGraphQL>GraphQL</SGraphQL>;

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
  animation: ${RNMove} 0.6s linear forwards;
`;

export const Rn = () => <SRn>React-Native</SRn>;

// TypeScript Animation

const TsMove = keyframes`
    from{
        transfrom: translateX(0) translateY(0)
    }
    to{
        background: radial-gradient(circle, rgba(47,115,191,1) 0%, rgba(148,187,233,1) 100%);
        transform: translateX(150px) translateY(-200px);
    }
`;
const STs = styled(Items)`
  width: 70px;
  height: 70px;
  animation: ${TsMove} 0.5s linear forwards;
`;

export const Ts = () => <STs>TypeScript</STs>;

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
  animation: ${NodeMove} 0.6s linear forwards;
`;

export const NodeJs = () => <Node>NodeJs</Node>;

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
  animation: ${ReactMove} 0.3s linear forwards;
`;

export const Rct = () => <SRct>React</SRct>;

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
  animation: ${JsMove} 0.2s linear forwards;
`;

export const JsBox = () => <SJs>JavaScript</SJs>;

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
  animation: ${CssMove} 0.2s linear forwards;
`;

export const Css = () => <SCss>Css</SCss>;

//Html

const SHtml = styled(Items)`
  background: linear-gradient(
    90deg,
    rgba(222, 8, 1, 1) 0%,
    rgba(232, 99, 42, 1) 50%
  );
`;

export const HtmlBox = () => <SHtml>Html</SHtml>;
