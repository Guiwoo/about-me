import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
  url: string;
  text: string;
};

const GridText = styled(Link)`
  &:hover {
    color: orange;
  }
`;
// Link Prop On Project hover
export const LinkToProject = ({ url, text }: LinkProps) => (
  <div style={{ textAlign: "end" }}>
    <GridText to={url}>{text}</GridText>
  </div>
);
