import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchUser } from "../../actions/user";

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
  transition: 0.2s ease-out width;

  @media (max-width: 1200px) {
    width: 70vw;
  }

  @media (max-width: 1000px) {
    width: 75vw;
  }

  @media (max-width: 900px) {
    width: 80vw;
    grid-template-columns: 60px auto;

    div {
      justify-self: start;
    }

    a,
    button {
      grid-column: 1 / span 2;
      width: 100%;
      margin-top: 10px;
    }
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

const LeaderCard = ({
  leader: { Hacker_News_User: username },
  salt,
  rank,
  fetchUser
}) => {
  let history = useHistory();
  return (
    <CardContainer>
      <Card>
        <Rank>#{rank}</Rank>
        <h4>
          {username}
          <br />
          <br />
          Grains of salt: {salt}
        </h4>
        <StyledLink
          onClick={() => fetchUser(username, history)}
          to={`/user/${username}`}
        >
          <Button>View Comments</Button>
        </StyledLink>
      </Card>
    </CardContainer>
  );
};
export default connect(null, { fetchUser })(LeaderCard);
