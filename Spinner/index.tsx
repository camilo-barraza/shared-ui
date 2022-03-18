import React from "react";
import { Div, theme } from "shared-ui/styledConfig";
import styled from "styled-components";

const Wrapper = styled(Div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Bounce = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 5px 0 5px;
  background: ${(props) => props.color};
  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }
  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
`;

const Bounce1 = styled(Bounce)`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
`;

const Bounce2 = styled(Bounce)`
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
`;

const SpinnerContainer = styled.div`
  width: 70px;
  text-align: center;
`;

const Spinner = ({ color = theme.colors.gray300, ...props }) => {
  return (
    <Wrapper {...props}>
      <SpinnerContainer>
        <Bounce1 color={color} />
        <Bounce2 color={color} />
        <Bounce color={color} />
      </SpinnerContainer>
    </Wrapper>
  );
};

export { Spinner };
