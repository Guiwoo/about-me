import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactTextTransition, { presets } from "react-text-transition";
import Tooltip from "@mui/material/Tooltip";
import { Box, TitleText } from "../Shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const TEXTS = ["Park.guiwoo@hotmail.com", "pbk12568@gmail.com"];
const IAM = ["I am ", "_ __"];

const AdditionalBox = styled(Box)`
  border-left: 1px solid white;
  animation-duration: 1s;
  display: flex;
  width: 50%;
`;

const MainContent = styled.div`
  padding: 10px 0px;
  margin-left: 20px;
`;

const Mobile = styled(FontAwesomeIcon)`
  font-size: 15px;
  color: white;
`;

const Summary = styled.div`
  font-size: 14px;
  line-height: 1.6;
`;

const Contact = styled.button`
  display: flex;
  padding: 2px 18px;
  color: rgba(255, 255, 255, 0.8);
`;

const Mytool = styled(Tooltip)``;

const Email = styled(Contact)`
  &:hover {
    color: #ffa801;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const CopyMessage = styled.span`
  background-color: gray;
  border-radius: 5px;
  padding: 2px 3px;
`;

const WhoText = styled.span`
  display: inline-block;
  margin-left: 18px;
  color: rgba(255, 255, 255, 0.8);
`;

const CopyText = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-left: 20px;
`;

const SubPersonal = () => {
  const [index, setIndex] = useState(0);
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <AdditionalBox>
      <MainContent>
        <TitleText>Contact</TitleText>
        <Summary>
          <Contact>
            <Icon icon={faMobileAlt} />
            <span>010-7106-8657</span>
          </Contact>
          <Mytool title="Copy Email" followCursor>
            <Email
              onClick={() => {
                navigator.clipboard.writeText(TEXTS[index % TEXTS.length]);
                setCopy(true);
                setTimeout(() => setCopy(false), 2000);
              }}
            >
              {index % 2 === 0 ? (
                <Icon icon={faMicrosoft} />
              ) : (
                <Icon icon={faGoogle} />
              )}
              <span>
                <ReactTextTransition
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.gentle}
                  style={{ margin: "0 4px" }}
                  inline
                />
              </span>
              {!copy ? <CopyText>Click to Copy</CopyText> : null}
              {copy ? <CopyMessage>Copied</CopyMessage> : null}
            </Email>
          </Mytool>
        </Summary>
        <TitleText>
          <ReactTextTransition
            text={IAM[index % IAM.length]}
            springConfig={presets.gentle}
            style={{ margin: "0 4px" }}
            inline
          />
        </TitleText>
        <Summary>
          <WhoText>
            <ReactTextTransition
              text={IAM[(index + 1) % IAM.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
            />{" "}
            a Passionate Person.
            <br />
            I have worked in different industry in for a while.
            <br />
            What I learned from my experience is "Conversation".
            <br />
            Especially{" "}
            <ReactTextTransition
              text={IAM[(index + 1) % IAM.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
            />{" "}
            a great listener.
            <br />I like a challenge and don't get scared of brand new things.
          </WhoText>
        </Summary>
        <TitleText>
          What's My <mark>GOAL</mark> ?
        </TitleText>
        <Summary>
          <WhoText>
            • Frontend Developer - Create Creativity WebSite <br />• FullStack
            Developer, Service My Own Business
          </WhoText>
        </Summary>
      </MainContent>
    </AdditionalBox>
  );
};

export default SubPersonal;
