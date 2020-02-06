import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: white;
  background-color: #97adce;
  padding: 10px;
  // border: 2px solid red;
  margin: 5px;
  width: 45vw;
    @media (max-width: 900px) {
      width: 65vw;
    }
    @media (max-width: 500px) {
      width: 95vw;
    }
`;

const Button = styled.button`
  background-color: #2a3c58;
  color: white;
  font-family: "Roboto Mono", monospace;

  :hover {
    background-color: #3e5982;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Rank = styled.h3`
  font-size: 30px;
  font-family: "Roboto Mono", monospace;
  padding-right: 30px;
  padding-left: 30px;
`;

const LeaderCard = props => {
  return (
    <CardContainer>
      <Card>
        <Rank>#{props.leader.rank}</Rank>
        <h4>
          {props.leader.username}
          <br />
          <br />
          Grains of salt: {props.leader.salt_score}
        </h4>
        <StyledLink to={`/user/${props.leader.id}`}>
          <Button>View Comments</Button>
        </StyledLink>
      </Card>
    </CardContainer>
  );
};
export default LeaderCard;
