import React from "react";
import styled from "styled-components";
import { TitleText } from "../../Shared";
import KokoaImg from "../../../assets/projectImg/kakao/kokoaFirstPage.png";
import Kokoa2 from "../../../assets/projectImg/kakao/kokoaJoin.png";
import Kokoa3 from "../../../assets/projectImg/kakao/kokoChat.png";
import Kokoa4 from "../../../assets/projectImg/kakao/Mypage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";

const ShowBox = styled.div`
  width: 600px;
  height: 400px;
  margin-left: 10px;
`;

const Container = styled.div`
  padding: 10px;
`;

const Img = styled.img`
  width: 100px;
  height: 150px;
`;

const ShowTitle = styled(TitleText)`
  margin: 0 0 5px 0;
`;

const TilteBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const DefaultIcon = styled.div`
  border-radius: 2px;
  margin-right: 5px;
`;

const HtmlIcon = styled(DefaultIcon)`
  background: linear-gradient(
    90deg,
    rgba(222, 8, 1, 1) 0%,
    rgba(232, 99, 42, 1) 50%
  );
`;
const CssIcon = styled(DefaultIcon)`
  background: linear-gradient(
    90deg,
    rgba(3, 112, 181, 1) 0%,
    rgba(3, 145, 212, 1) 50%
  );
`;

const FirstShow = () => {
  return (
    <ShowBox>
      <Container>
        <ShowTitle>Kakao Clone</ShowTitle>
        <TilteBox>
          <HtmlIcon>
            <FontAwesomeIcon icon={faHtml5} /> HTML
          </HtmlIcon>
          <CssIcon>
            <FontAwesomeIcon icon={faCss3} /> CSS
          </CssIcon>
        </TilteBox>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <Img src={KokoaImg} />
            <div>• Index Page</div>
          </div>
          <div>
            <Img src={Kokoa2} />
            <div>• Join Page</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <div>
            <Img src={Kokoa3} />
            <div>• Chat List</div>
          </div>
          <div>
            <Img src={Kokoa4} />
            <div>• My Page</div>
          </div>
        </div>
      </Container>
    </ShowBox>
  );
};

export default FirstShow;
