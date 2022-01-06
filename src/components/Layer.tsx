import React from "react";
import styled from "styled-components";

const Layer = styled.div`
  display: flex;
`;

type ChildrenProp = {
  children: React.ReactNode;
};

const RightScreenLayOut: React.FC<ChildrenProp> = ({ children }) => (
  <Layer>{children}</Layer>
);

export default RightScreenLayOut;
