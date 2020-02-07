import React from "react";
import styled, { keyframes } from "styled-components";

const Error = props => {
  return (
    <ErrorMessage>
      <p>{`Something went wrong - ${props.message}`}</p>
    </ErrorMessage>
  );
};

export default Error;

const fadeAway = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, 0%);
  }

  to {
    opacity: 0;
    transform: translate(-50%, 50%);
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: #1c1c1c;
  padding: 0.75rem;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  animation: ${fadeAway} 5s forwards;
`;
