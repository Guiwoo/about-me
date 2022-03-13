import React from "react";
import styled from "styled-components";
import ReactTextTransition, {presets} from "react-text-transition";
import Tooltip from "@mui/material/Tooltip";
import {TitleText, Summary} from "../../Shared";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMicrosoft, faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {IndexProp} from "./Iam";

const Contact = styled.button`
  display: flex;
  padding: 2px 18px;
  color: ${(props) => props.theme.fontColor.main};
`;

const Email = styled(Contact)`
  &:hover {
    color: ${(props) => props.theme.underline.main};
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

const CopyText = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.fontColor.main};
  margin-left: 20px;
`;

const TEXTS = ["Park.guiwoo@hotmail.com", "pbk12568@gmail.com"];

const ContactMe: React.FC<IndexProp> = ({index}) => {
  const [copy, setCopy] = React.useState(false);
  return (
    <>
      <TitleText>Contact</TitleText>
      <Summary>
        <Contact>
          <Icon icon={faMobileAlt} />
          <span>010-7106-8657</span>
        </Contact>
        <Tooltip title="Copy Email">
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
                style={{margin: "0 4px"}}
                inline
              />
            </span>
            {!copy ? <CopyText>Click to Copy</CopyText> : null}
            {copy ? <CopyMessage>Copied</CopyMessage> : null}
          </Email>
        </Tooltip>
      </Summary>
    </>
  );
};

export default ContactMe;
