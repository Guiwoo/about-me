import React from "react";
import styled, { keyframes } from "styled-components";
import { TitleText } from "../../components/Shared";
import { Img, TextCenter } from "../../components/Project/ShowBox/ShowShared";
import { aws_address } from "../../aws";

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

const SVideoSection = styled.div``;

const MacBookImg = styled.div`
  background: url(${aws_address.img.mac});
  background-position: center;
  background-repeat: none;
  background-size: cover;
  min-width: 406px;
  min-height: 315px;
  display: flex;
  justify-content: center;
`;

const VideoBox = styled.video`
  width: 380px;
  height: 320px;
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

const fadein = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0
    }
`;

const ImgAnimation = styled.div`
  opacity: 0;
  animation: ${fadein} 5s linear infinite;
`;

const AnimationImg = styled(Img)`
  width: 220px;
  height: 350px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const PhotoText = styled.div`
  font-size: 14px;
  margin: 5px 0px;
`;

type ImgTextCards = {
  cards: string[];
};

export const ImgText: React.FC<ImgTextCards> = ({ cards }) => {
  const [num, setNum] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setNum((prev) => prev + 1);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <ImgAnimation>
      <AnimationImg src={cards[num % cards.length]} />
    </ImgAnimation>
  );
};
