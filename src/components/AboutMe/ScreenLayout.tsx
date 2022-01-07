import React from "react";
import styled from "styled-components";

const Layer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

type ChildrenProp = {
  children: React.ReactNode;
};

const AboutMeLayout: React.FC<ChildrenProp> = ({ children }) => (
  <Layer>{children}</Layer>
);

export default AboutMeLayout;
