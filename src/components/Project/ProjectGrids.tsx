import React from "react";
import styled from "styled-components";
import OnMacKakao from "../../assets/projectImg/kakao/onMac.png";
import onMacModal from "../../assets/projectImg/modal/onMac.png";
import onMacYou from "../../assets/projectImg/youtube/onMacYou.png";
import onMacMovie from "../../assets/projectImg/reactMovie/onMac.png";
import onMobile from "../../assets/projectImg/movieApp/fatHome.png";
import onMacCoffee from "../../assets/projectImg/CoffeeApp/Home.png";
import onMacReview from "../../assets/projectImg/reviewApp/onMac.png";

interface ToggleOneProps {
  ToggleOne(num?: number): void;
}

const ProjectFrame = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
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

const ProjectGrids: React.FC<ToggleOneProps> = ({ ToggleOne }) => {
  return (
    <SProjectGrid>
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
        onMouseOver={() => ToggleOne(5)}
        onMouseLeave={() => ToggleOne()}
      />
      <SixthProject
        onMouseOver={() => ToggleOne(6)}
        onMouseLeave={() => ToggleOne()}
      />
      <SevenPrjoect
        onMouseOver={() => ToggleOne(7)}
        onMouseLeave={() => ToggleOne()}
      />
    </SProjectGrid>
  );
};

export default ProjectGrids;
