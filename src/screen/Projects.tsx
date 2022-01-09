import React from "react";
import styled from "styled-components";
import { TitleText } from "../components/Shared";
import PieTable from "../components/Project/PieTable";
import OnMacKakao from "../assets/projectImg/kakao/onMac.png";
import onMacModal from "../assets/projectImg/modal/onMac.png";
import onMacYou from "../assets/projectImg/youtube/onMacYou.png";
import onMacMovie from "../assets/projectImg/reactMovie/onMac.png";
import onMobile from "../assets/projectImg/movieApp/fatHome.png";
import FirstShow from "../components/Project/ShowBox/FirstShow";
import SecondShow from "../components/Project/ShowBox/SecondShow";
import ThirdShow from "../components/Project/ShowBox/TrhidShow";
import FourthShow from "../components/Project/ShowBox/FourthShow";
import FifthShow from "../components/Project/ShowBox/FifthShow";

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
  background-position: center center;
  background-repeat: no-repeat;
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

const ProjectHome = () => {
  const [index, setIndex] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const ToggleOne = (num?: number) => {
    if (num) {
      setIndex(num);
    }
    setShow(!show);
  };
  return (
    <Container>
      <Title>My Journeys..</Title>
      <Box>
        <ProjectGrid>
          <FirstProject
            onMouseOver={() => ToggleOne(1)}
            onMouseLeave={() => ToggleOne()}
          />
          <div></div>
          <div></div>
          <SecondProject
            onMouseOver={() => ToggleOne(2)}
            onMouseLeave={() => ToggleOne()}
          />
          <ThirdProject
            onMouseOver={() => ToggleOne(3)}
            onMouseLeave={() => ToggleOne()}
          />
          <FourthProject
            onMouseOver={() => ToggleOne(4)}
            onMouseLeave={() => ToggleOne()}
          />
          <FifthPorject
            onMouseOver={() => ToggleOne(4)}
            onMouseLeave={() => ToggleOne()}
          />
          <div style={{ backgroundColor: "pink" }}>Eight</div>
          <div style={{ backgroundColor: "gold" }}>Nine</div>
        </ProjectGrid>
        <FifthShow />
        {/* {!show ? (
          <PieTable />
        ) : index === 1 ? (
          <FirstShow />
        ) : index === 2 ? (
          <SecondShow />
        ) : index === 3 ? (
          <ThirdShow />
        ) : (
          <FourthShow />
        )} */}
      </Box>
    </Container>
  );
};

export default ProjectHome;
