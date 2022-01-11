import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useIntervalTitle } from "../../utils/hooks";
import { device } from "../../utils/resize";
import routeName from "../../utils/routeName";

const Left = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ThickSpan = styled.span`
  display: block;
  font-size: 50px;
  margin-bottom: 40px;
  font-weight: 600;
`;

const TinySpanBox = styled.div`
  @media ${device.mobile} {
    opacity: 0.7;
  }
  @media ${device.laptop} {
    position: absolute;
    opacity: 0.7;
    margin-top: 40px;
  }

  @media ${device.desktop} {
    //need to fix with over 27 monitor
  }
`;

const TinySpan = styled.span`
  display: block;
  margin: 20px 0px;
`;
const MobileNav = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
  font-size: 12px;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    color: orange;
  }

  @media ${device.laptop} {
    display: none;
  }

  @media ${device.desktop} {
    display: none;
  }
`;

const HomeLeft = () => {
  useIntervalTitle(0, 40); /* uncomment before deploy */
  const navigation = useNavigate();
  return (
    <Left>
      <div>
        <div>
          <ThickSpan>Hello,</ThickSpan>
          <ThickSpan>I'm Guiwoo Park</ThickSpan>
        </div>
        <TinySpanBox>
          <TinySpan>Don't give up,I can do whatever I want.</TinySpan>
          <TinySpan>Do my best, Happy Coding</TinySpan>
        </TinySpanBox>
      </div>
      <MobileNav onClick={() => navigation(routeName.me)}>
        About Me ✈️
      </MobileNav>
    </Left>
  );
};

export default HomeLeft;
