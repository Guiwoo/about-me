import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routeName from "../../routeName";
import { aws_address } from "../../aws";

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
  gap: 10px;
`;

const FirstProject = styled(ProjectFrame)`
  background-image: url(${aws_address.kakao.mac});
  border-bottom: 1px solid white;
`;

const SecondProject = styled(ProjectFrame)`
  background-image: url(${aws_address.modal.mac});
`;

const ThirdProject = styled(ProjectFrame)`
  background-image: url(${aws_address.youtube.mac});
`;
const FourthProject = styled(ProjectFrame)`
  background-image: url(${aws_address.movie.mac});
`;
const FifthPorject = styled(ProjectFrame)`
  background-image: url(${aws_address.Mmovie.mac});
  background-repeat: no-repeat;
`;
const SixthProject = styled(ProjectFrame)`
  background-image: url(${aws_address.coffee.mac});
`;

const SevenPrjoect = styled(ProjectFrame)`
  background-image: url(${aws_address.review.mac});
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
