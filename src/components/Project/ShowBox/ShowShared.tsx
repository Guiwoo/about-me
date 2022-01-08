import React, { ReactChild, ReactChildren } from "react";
import styled from "styled-components";
import { TitleText } from "../../Shared";

interface AuxProps {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const ShowBox = styled.div`
  width: 600px;
  height: 400px;
  margin-left: 10px;
`;

const Container = styled.div`
  padding: 10px;
`;

export const ShowBoxLayout = ({ children }: AuxProps) => {
  return (
    <ShowBox>
      <Container>{children}</Container>
    </ShowBox>
  );
};

export const ImgBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ImgBox2 = styled(ImgBox)`
  margin-top: 10px;
`;

export const Img = styled.img`
  width: 150px;
  height: 160px;
`;

export const ShowTitle = styled(TitleText)`
  margin: 0 0 5px 0;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const DefaultIcon = styled.div`
  border-radius: 2px;
  margin-right: 5px;
`;

export const TextCenter = styled.div`
  text-align: center;
`;
