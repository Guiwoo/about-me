import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
  url: string;
  text: string;
  here: boolean;
};

const GridText = styled(Link)`
  &:hover {
    color: ${(props) => props.theme.underline.main};
  }
`;
// Link Prop On Project hover
export const LinkToProject = ({url, text, here}: LinkProps) => (
  <div
    style={{
      textAlign: "end",
      borderBottom: `2px solid ${here ? "orange" : "none"}`,
      padding: "4px 0px",
    }}
  >
    <GridText to={url}>{text}</GridText>
  </div>
);
