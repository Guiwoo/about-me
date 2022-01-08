import React from "react";
import styled from "styled-components";
import { TitleText } from "../components/Shared";
import PieTable from "../components/Project/PieTable";
import KokoaImg from "../assets/projectImg/kakao/kokoaFirstPage.png";

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
  background-image: url(${KokoaImg});
  background-position: center;
  background-size: cover;
  opacity: 0.9;
  text-align: end;
`;
const TextInBox = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: teal;
  text-decoration: underline;
`;

const ShowBox = styled.div`
  width: 380px;
  height: 400px;
  background-color: red;
  margin-left: 10px;
`;

const ProjectHome = () => {
  const [show, setShow] = React.useState(false);
  const handleOnMouse = () => {
    console.log("on");
  };
  return (
    <Container>
      <Title>My Journeys..</Title>
      <Box>
        <ProjectGrid>
          <FirstProject onMouseEnter={handleOnMouse}>
            <TextInBox>
              Kakao
              <br /> Clone
            </TextInBox>
          </FirstProject>
          <div style={{ backgroundColor: "orange" }}>Two</div>
          <div style={{ backgroundColor: "yellow" }}>Three</div>
          <div style={{ backgroundColor: "green" }}>Four</div>
          <div style={{ backgroundColor: "blue" }}>Five</div>
          <div style={{ backgroundColor: "teal" }}>Six</div>
          <div style={{ backgroundColor: "purple" }}>Seven</div>
          <div style={{ backgroundColor: "pink" }}>Eight</div>
          <div style={{ backgroundColor: "gold" }}>Nine</div>
        </ProjectGrid>
        <ShowBox>
          <div style={{ padding: "10px" }}>
            <h2>Kakao Clone</h2>
            <div>
              <div>Img</div>
              <div>
                <span>Html,Css</span>
                <span>First Page</span>
              </div>
            </div>
            <div>
              <div>Img</div>
              <div>
                <span>Join and FullScreen</span>
                <span>Responsive desgin</span>
              </div>
            </div>
            <div>
              <div>Img</div>
              <div>
                <span>Chat Lists</span>
                <span>Bedge and use Animations</span>
              </div>
            </div>
          </div>
        </ShowBox>
        {/* {<PieTable />} */}
      </Box>
    </Container>
  );
};

export default ProjectHome;
