import React from "react";
import styled from "styled-components";
import { TitleText } from "../components/Shared";
import PieTable from "../components/Project/PieTable";
import FirstShow from "../components/Project/ShowBox/FirstShow";
import SecondShow from "../components/Project/ShowBox/SecondShow";
import ThirdShow from "../components/Project/ShowBox/TrhidShow";
import FourthShow from "../components/Project/ShowBox/FourthShow";
import FifthShow from "../components/Project/ShowBox/FifthShow";
import SixthShow from "../components/Project/ShowBox/SixthShow";
import SevenShow from "../components/Project/ShowBox/SeventhShow";
import ProjectGrids from "../components/Project/ProjectGrids";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled(TitleText)`
  font-size: 22px;
`;

const Box = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;

const ProjectHome = () => {
  const [index, setIndex] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const mouseIn = (num?: number): void => {
    if (num) {
      setIndex(num);
    }
    setShow(true);
  };
  const mouseOut = () => setShow(false);
  return (
    <Container>
      <Title>My Journeys..</Title>
      <Box>
        <ProjectGrids mouseIn={mouseIn} mouseOut={mouseOut} />
        {!show ? (
          <PieTable />
        ) : index === 1 ? (
          <FirstShow />
        ) : index === 2 ? (
          <SecondShow />
        ) : index === 3 ? (
          <ThirdShow />
        ) : index === 4 ? (
          <FourthShow />
        ) : index === 5 ? (
          <FifthShow />
        ) : index === 6 ? (
          <SixthShow />
        ) : (
          <SevenShow />
        )}
      </Box>
    </Container>
  );
};

export default ProjectHome;
