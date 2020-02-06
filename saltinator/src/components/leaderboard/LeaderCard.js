import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../styles/colors";

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  color: white;
  background-color: #97adce;
  padding: 2rem;
  margin-bottom: 1.5rem;
  width: 45vw;
  background-color: ${colors.card};
  color: ${colors.text};
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    width: 65vw;
  }
  @media (max-width: 500px) {
    width: 95vw;
  }
`;

const Button = styled.button`
  background-color: ${colors.background};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  color: white;
  margin: 0;
  font-family: "Roboto Mono", monospace;

  :hover {
    background-color: #3e5982;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  justify-self: end;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;

  h3 {
    margin: 0;
  }
`;

const Rank = styled.h3`
  font-size: 42px;
  font-family: "Roboto Mono", monospace;
`;

const Info = styled.div`
  justify-self: flex-start;

  h2,
  h4 {
    padding: 0;
    margin: 0;
  }

  h4 {
    color: #9c9c9c;
  }
`;

const LeaderCard = props => {
  return (
    <CardContainer>
      <Card>
        <Rank>#{props.leader.rank}</Rank>
        <Info>
          <h2>{props.leader.username}</h2>
          <h4>Grains of salt: {props.leader.salt_score}</h4>
        </Info>
        <StyledLink to={`/user/${props.leader.id}`}>
          <Button>View Comments</Button>
        </StyledLink>
      </Card>
    </CardContainer>
  );
};
export default LeaderCard;
