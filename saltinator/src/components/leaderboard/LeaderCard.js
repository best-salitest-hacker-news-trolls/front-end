import React from "react";
import styled from "styled-components";

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
`;

const Button = styled.button`
  background-color: #2a3c58;
  color: white;
  width: 25%;
  font-family: "Roboto Mono", monospace;
  &:hover{
  background-color: #3E5982;
  }
  
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
`

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
        
        <Button>View Comments</Button>
        
      </Card>
    </CardContainer>
  );
};
export default LeaderCard;
