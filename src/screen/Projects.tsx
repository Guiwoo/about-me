import React from "react";
import styled from "styled-components";
import { TitleText } from "../components/Shared";
import PieTable from "../components/Project/PieTable";
import OnMacKakao from "../assets/projectImg/kakao/onMac.png";
import onMacModal from "../assets/projectImg/modal/onMac.png";
import FirstShow from "../components/Project/ShowBox/FirstShow";
import SecondShow from "../components/Project/ShowBox/SecondShow";

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

const ProjectFrame = styled.div`
  background-position: center;
  background-size: cover;
  opacity: 0.9;
`;

const FirstProject = styled(ProjectFrame)`
  background-image: url(${OnMacKakao});
  border-bottom: 1px solid white;
`;

const SecondProject = styled(ProjectFrame)`
  background-image: url(${onMacModal});
`;

const ProjectHome = () => {
  const [index, setIndex] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const ToggleOne = (num?: number) => {
    if (num) {
      setIndex(num);
    }
    setShow(!show);
  };
  console.log(index);
  return (
    <Container>
      <Title>My Journeys..</Title>
      <Box>
        <ProjectGrid>
          <FirstProject
            onMouseEnter={() => ToggleOne(1)}
            onMouseLeave={() => ToggleOne()}
          />
          <div></div>
          <div></div>
          <div></div>
          <div style={{ backgroundColor: "blue" }}>Five</div>
          <div style={{ backgroundColor: "teal" }}>Six</div>
          <SecondProject
            onMouseEnter={() => ToggleOne(2)}
            onMouseLeave={() => ToggleOne()}
          />
          <div style={{ backgroundColor: "pink" }}>Eight</div>
          <div style={{ backgroundColor: "gold" }}>Nine</div>
        </ProjectGrid>
        {!show ? <PieTable /> : index === 1 ? <FirstShow /> : <SecondShow />}
      </Box>
    </Container>
  );
};

export default ProjectHome;
