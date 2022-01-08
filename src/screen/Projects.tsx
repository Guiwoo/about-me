import React from "react";
import styled from "styled-components";
import { TitleText } from "../components/Shared";
import PieTable from "../components/Project/PieTable";
import KokoaImg from "../assets/projectImg/kakao/kokoaFirstPage.png";
import OnMacKakao from "../assets/projectImg/kakao/onMac.png";
import FirstShow from "../components/Project/ShowBox/FirstShow";

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

const ProjectGrid = styled.div`
  width: 80%;
  display: grid;
  height: 400px;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

const FirstProject = styled.div`
  background-image: url(${OnMacKakao});
  background-position: center;
  background-size: cover;
  opacity: 0.9;
  text-align: end;
`;

const ProjectHome = () => {
  const [show, setShow] = React.useState(false);
  const handleOneIn = () => {
    setShow(true);
  };
  const handleOneOut = () => {
    setShow(false);
  };
  return (
    <Container>
      <Title>My Journeys..</Title>
      <Box>
        <ProjectGrid>
          <FirstProject
            onMouseEnter={handleOneIn}
            onMouseLeave={handleOneOut}
          ></FirstProject>
          <div style={{ backgroundColor: "orange" }}>Two</div>
          <div style={{ backgroundColor: "yellow" }}>Three</div>
          <div style={{ backgroundColor: "green" }}>Four</div>
          <div style={{ backgroundColor: "blue" }}>Five</div>
          <div style={{ backgroundColor: "teal" }}>Six</div>
          <div style={{ backgroundColor: "purple" }}>Seven</div>
          <div style={{ backgroundColor: "pink" }}>Eight</div>
          <div style={{ backgroundColor: "gold" }}>Nine</div>
        </ProjectGrid>
        {!show ? <PieTable /> : <FirstShow />}
      </Box>
    </Container>
  );
};

export default ProjectHome;
