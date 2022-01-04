import styled from "styled-components";
import { Link } from "react-router-dom";

interface CurrentProps {
  readonly current: boolean;
}

export const NewLine = styled(Link)<CurrentProps>`
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: ${(props) =>
    props.current ? `1px solid ${props.theme.fontColor.main}` : ""};
  border-radius: 10px;
`;
