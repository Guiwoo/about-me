import React from "react";
import styled from "styled-components";
import { TitleText } from "../components/Shared";
import { VictoryPie, VictoryLabel } from "victory";

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

const ProjectHome = () => {
  return (
    <Container>
      <Title>My Projects..</Title>
      <Box>
        <ProjectGrid>
          <div style={{ backgroundColor: "red" }}>One</div>
          <div style={{ backgroundColor: "orange" }}>Two</div>
          <div style={{ backgroundColor: "yellow" }}>Three</div>
          <div style={{ backgroundColor: "green" }}>Four</div>
          <div style={{ backgroundColor: "blue" }}>Five</div>
          <div style={{ backgroundColor: "teal" }}>Six</div>
          <div style={{ backgroundColor: "purple" }}>Seven</div>
          <div style={{ backgroundColor: "pink" }}>Eight</div>
          <div style={{ backgroundColor: "gold" }}>Nine</div>
        </ProjectGrid>
        <div style={{ transform: "translateX(50px)" }}>
          <svg width={350} height={350}>
            <VictoryPie
              colorScale={["#efd81c", "#2F73BF", "#FFD445", "#E96228", "gray"]}
              style={{
                labels: {
                  fontSize: 13,
                  fill: "white" /**Light theme Check the font here */,
                },
              }}
              standalone={false}
              width={300}
              height={300}
              innerRadius={75}
              data={[
                { x: 1, y: 42, label: "JavaScript\n42%" },
                { x: 2, y: 16, label: "TypeScript\n16%" },
                { x: 3, y: 13, label: "Python\n13%" },
                { x: 4, y: 13, label: "HTML\n13%" },
                { x: 5, y: 15, label: "Css,Scss,Go,Etc..\n15%" },
              ]}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{
                fontSize: 18,
                fill: "white",
              }}
              x={150}
              y={150}
              text="Most Used"
            />
          </svg>
        </div>
      </Box>
    </Container>
  );
};

export default ProjectHome;
