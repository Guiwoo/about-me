import React from "react";
import styled, {keyframes} from "styled-components";
import {MobileNav, TitleText} from "../../components/Shared";
import {Img, TextCenter} from "../../components/Project/ShowBox/ShowShared";
import {aws_address} from "../../utils/aws";
import {device} from "../../utils/resize";

/** Detail LayOut with Type */
type ChildrenProp = {
  text: string;
  children: React.ReactNode;
};

/** Language Prop for Detail whole Pages */
export interface IisEnProp {
  isEn: boolean;
}

const Container = styled.div`
  padding: 20px;
  position: relative;
  @media ${device.mobile} {
    padding: 60px 20px;
  }
  @media ${device.laptop} {
    padding: 20px;
  }

  @media ${device.desktop} {
    padding: 20px;
  }
`;
const Title = styled(TitleText)`
  font-size: 24px;
`;

export const DetailLayout: React.FC<ChildrenProp> = ({text, children}) => {
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
  @media ${device.mobile} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
    /* padding: 70px 0px; */
  }

  @media ${device.desktop} {
    flex-direction: row;
  }
`;
const ItemBox = styled.div`
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 45%;
  }

  @media ${device.desktop} {
    width: 45%;
  }
`;
export const Description = styled.div`
  font-size: 20px;
  padding: 2rem 0rem;
`;

export const ItemBoxLayout: React.FC<ChildrenProp> = ({text, children}) => {
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
  flex-wrap: wrap;
`;
export const Demo = styled.a`
  margin: 10px 0px;
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
/** Project links for big screen */
export const NavForProject = styled.div`
  cursor: pointer;
  &:hover {
    color: orange;
  }
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }

  @media ${device.desktop} {
    display: block;
  }
`;

export const NavForProjectLeft = styled(NavForProject)``;

/** Project links for mobile*/
export const FixedMobileNav = styled(MobileNav)`
  bottom: -20px;
`;

/** Video Box */
type VideoProps = {
  videoUrl: string;
};

const SVideoSection = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    width: 100%;
    height: 55%;
    background: url(${aws_address.img.mac});
    background-position: center;
    background-repeat: none;
    background-size: cover;
  }
  @media ${device.desktop} {
    width: 100%;
    height: 55%;
    background: url(${aws_address.img.mac});
    background-position: center;
    background-repeat: none;
    background-size: cover;
  }
`;

const MacBookImg = styled.div``;

const VideoBox = styled.video`
  width: 90%;
  border-radius: 5px;
  transform: translateX(4%);
  @media ${device.laptop} {
    width: 65%;
    transform: translateX(27%);
  }
  @media ${device.desktop} {
  }
`;

export const VideoSection: React.FC<VideoProps> = ({videoUrl}) => {
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
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }

  @media ${device.desktop} {
    display: block;
  }
`;

const AnimationImg = styled.div<{hoit: string}>`
  width: 15vw;
  height: 110%;
  background-image: url(${(props) => props.hoit});
  background-size: cover;
  background-position: center;
`;

export const PhotoText = styled.div`
  font-size: 14px;
  margin: 5px 0px;
`;

type ImgTextCards = {
  cards: string[];
};

export const FixedNav = styled.div`
  min-width: 95%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: -3rem;
`;

export const ImgText: React.FC<ImgTextCards> = ({cards}) => {
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
      <AnimationImg hoit={cards[num % cards.length]} />
    </ImgAnimation>
  );
};

//Box Layout for Specific

export const TheBox = styled.div`
  display: flex;
  position: relative;
  @media ${device.mobile} {
  }
  @media ${device.laptop} {
    min-height: 80%;
    justify-content: space-around;
  }

  @media ${device.desktop} {
    justify-content: space-around;
  }
`;
