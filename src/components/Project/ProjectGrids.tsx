import React from "react";
import styled from "styled-components";
import OnMacKakao from "../../assets/projectImg/kakao/onMac.png";
import onMacModal from "../../assets/projectImg/modal/onMac.png";
import onMacYou from "../../assets/projectImg/youtube/onMacYou.png";
import onMacMovie from "../../assets/projectImg/reactMovie/onMac.png";
import onMobile from "../../assets/projectImg/movieApp/fatHome.png";
import onMacCoffee from "../../assets/projectImg/CoffeeApp/Home.png";
import onMacReview from "../../assets/projectImg/reviewApp/onMac.png";
import { useNavigate } from "react-router-dom";
import routeName from "../../routeName";

interface ToggleOneProps {
  mouseIn(num?: number): void;
  mouseOut(): void;
}

const ProjectFrame = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  cursor: pointer;
`;

const SProjectGrid = styled.div`
  width: 80%;
  display: grid;
  height: 400px;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

const FirstProject = styled(ProjectFrame)`
  background-image: url(${OnMacKakao});
  border-bottom: 1px solid white;
`;

const SecondProject = styled(ProjectFrame)`
  background-image: url(${onMacModal});
`;

const ThirdProject = styled(ProjectFrame)`
  background-image: url(${onMacYou});
`;
const FourthProject = styled(ProjectFrame)`
  background-image: url(${onMacMovie});
`;
const FifthPorject = styled(ProjectFrame)`
  background-image: url(${onMobile});
  background-repeat: no-repeat;
`;
const SixthProject = styled(ProjectFrame)`
  background-image: url(${onMacCoffee});
`;

const SevenPrjoect = styled(ProjectFrame)`
  background-image: url(${onMacReview});
`;

const GridText = styled.div`
  text-align: end;
  font-size: 12px;
  color: #05c46b;
`;

const ProjectGrids: React.FC<ToggleOneProps> = ({ mouseIn, mouseOut }) => {
  let navigate = useNavigate();
  const linkTo = (url: string) => navigate(url);
  return (
    <SProjectGrid>
      <FirstProject
        onMouseOver={() => mouseIn(1)}
        onMouseLeave={() => mouseOut()}
        onClick={() => linkTo(routeName.first)}
      >
        <GridText>Project 1</GridText>
      </FirstProject>
      <div></div>
      <div></div>
      <SecondProject
        onMouseOver={() => mouseIn(2)}
        onMouseLeave={() => mouseOut()}
        onClick={() => linkTo(routeName.second)}
      >
        <GridText>Project 2</GridText>
      </SecondProject>
      <ThirdProject
        onMouseOver={() => mouseIn(3)}
        onMouseLeave={() => mouseOut()}
        onClick={() => linkTo(routeName.third)}
      >
        <GridText>Project 3</GridText>
      </ThirdProject>
      <FourthProject
        onMouseOver={() => mouseIn(4)}
        onMouseLeave={() => mouseOut()}
        onClick={() => linkTo(routeName.fourth)}
      >
        <GridText>Project 4</GridText>
      </FourthProject>
      <FifthPorject
        onMouseOver={() => mouseIn(5)}
        onMouseLeave={() => mouseOut()}
        onClick={() => linkTo(routeName.fifth)}
      >
        <GridText>Project 5</GridText>
      </FifthPorject>
      <SixthProject
        onMouseOver={() => mouseIn(6)}
        onMouseLeave={() => mouseOut()}
        onClick={() => linkTo(routeName.sixth)}
      >
        <GridText>Project 6</GridText>
      </SixthProject>
      <SevenPrjoect
        onMouseOver={() => mouseIn(7)}
        onMouseLeave={() => mouseOut()}
        onClick={() => linkTo(routeName.seven)}
      >
        <GridText>Project 7</GridText>
      </SevenPrjoect>
    </SProjectGrid>
  );
};

export default ProjectGrids;
