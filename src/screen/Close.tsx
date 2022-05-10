import {Link} from "react-router-dom";
import styled from "styled-components";

const CoverContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TextBox = styled.div`
  font-size: 48px;
`;

const LinkBox = styled.div`
  margin-top: 20px;
`;

const LinkBoxAddress = styled(Link)`
  color: rgba(255, 255, 255, 0.5);
  transition: linear 0.2s;
  :hover {
    color: rgba(240, 240, 240, 0.7);
  }
`;

const RenewPage = () => (
  <CoverContainer>
    <TextBox>Page renewal.. Comming Soon.</TextBox>
    <LinkBox>
      <LinkBoxAddress to="/old">Go to old version Page..</LinkBoxAddress>
    </LinkBox>
  </CoverContainer>
);

export default RenewPage;
