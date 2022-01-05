import styled from "styled-components";
import { Link } from "react-router-dom";

interface CurrentProps {
  readonly current: string;
}

export const Container = styled.div`
  background-image: ${(props) => props.theme.gradient};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

export const NewLink = styled(Link)<CurrentProps>`
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: ${(props) =>
    props.current === "true" ? `1px solid ${props.theme.fontColor.main}` : ""};
  border-radius: 10px;
  &:hover {
    color: #ffa801;
  }
`;

export const NextBtn = styled.button``;
