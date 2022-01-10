import React from "react";
import styled from "styled-components";
import { TitleText } from "../../components/Shared";
import MacBook from "../../assets/img/맥북.png";
import { Img, TextCenter } from "../../components/Project/ShowBox/ShowShared";

/** Detail LayOut with Type */
type ChildrenProp = {
  text: string;
  children: React.ReactNode;
};

const Container = styled.div`
  padding: 20px;
`;
const Title = styled(TitleText)`
  font-size: 24px;
`;

export const DetailLayout: React.FC<ChildrenProp> = ({ text, children }) => {
  return (
    <Container>
      <Title>{text}</Title>
      {children}
    </Container>
  );
};

/** Main box LayOut */

export const MainBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ItemBox = styled.div`
  width: 45%;
`;
export const Description = styled.div`
  font-size: 20px;
  margin: 15px 0px;
`;

export const ItemBoxLayout: React.FC<ChildrenProp> = ({ text, children }) => {
  return (
    <ItemBox>
      <Description>{text}</Description>
      {children}
    </ItemBox>
  );
};
/** Link and button Desgin */

export const GoThere = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Demo = styled.a`
  margin-right: 10px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  padding: 2px 3px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: pink;
    transform: scale(1.1);
  }
`;

/** Video Box */
type VideoProps = {
  videoUrl: string;
};

const SVideoSection = styled.div`
  position: relative;
`;

const MacBookImg = styled.div`
  background: url(${MacBook});
  background-position: center;
  background-repeat: none;
  background-size: cover;
  min-width: 406px;
  min-height: 315px;
`;

const VideoBox = styled.video`
  max-width: 380px;
  max-height: 320px;
  position: absolute;
  top: 35px;
  right: 18px;
  border-radius: 5px;
`;

export const VideoSection: React.FC<VideoProps> = ({ videoUrl }) => {
  return (
    <SVideoSection>
      <MacBookImg>
        <VideoBox src={videoUrl} autoPlay loop muted />
      </MacBookImg>
    </SVideoSection>
  );
};

/** Right Side importing image layout from show box */

export const FixedImg = styled(Img)`
  width: 140px;
  height: 173px;
`;
export const FixedText = styled(TextCenter)`
  margin-top: 15px;
`;
