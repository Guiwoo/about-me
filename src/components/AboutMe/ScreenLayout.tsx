import React from "react";
import styled from "styled-components";
import { device } from "../../resize";

const Layer = styled.div`
  @media ${device.mobile} {
    display: contents;
  }
  @media ${device.laptop} {
    display: flex;
    width: 100%;
    height: 100%;
  }

  @media ${device.desktop} {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

type ChildrenProp = {
  children: React.ReactNode;
};

const AboutMeLayout: React.FC<ChildrenProp> = ({ children }) => (
  <Layer>{children}</Layer>
);

export default AboutMeLayout;
