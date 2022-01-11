import React, { useContext } from "react";
import styled from "styled-components";
import { VictoryPie, VictoryLabel } from "victory";
import { device } from "../../utils/resize";
import { LangContext } from "../../utils/toggleLang";

const PieBox = styled.div`
  transform: translateX(50px) translateY(50px);
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

const PieTable = () => {
  const { isEn, toggleIsEn: _ } = useContext(LangContext);
  return (
    <PieBox>
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
            fontSize: 14,
            fill: "white",
          }}
          x={150}
          y={150}
          text={
            isEn
              ? `Github Repo\nMost Used Language`
              : `Github Repo\n주요 사용 언어`
          }
        />
      </svg>
    </PieBox>
  );
};

export default PieTable;
