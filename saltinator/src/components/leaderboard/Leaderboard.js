import React, { useEffect, useState } from "react";
import axios from "axios";
import LeaderCard from "./LeaderCard";
import { leaderboardData } from "../../utils/mockData";
import styled from "styled-components";

import colors from "../../styles/colors";

const HeaderContainer = styled.div`
  display: flex;
  margin: auto;
  width: 45vw;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 70vw;
  }

  @media (max-width: 1000px) {
    width: 75vw;
  }

  @media (max-width: 900px) {
    width: 80vw;
    h2 {
      display: none;
    }
  }
`;

const Headers = styled.div`
  h1,
  h2 {
    font-weight: 300;
  }
`;

export const Leaderboard = () => {
  return (
    <Headers>
      <form>
        <h1>Leaderboard</h1>
      </form>

      <HeaderContainer>
        <h2>Rank</h2>
        <h2>Username</h2>
        <h2>Comments</h2>
      </HeaderContainer>

      {leaderboardData.map((leader, index) => (
        <LeaderCard leader={leader} key={index} />
      ))}
    </Headers>
  );
};
