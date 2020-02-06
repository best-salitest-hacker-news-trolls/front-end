import React, { useEffect, useState } from "react";
import axios from "axios";
import LeaderCard from "./LeaderCard";
import { leaderboardData } from "../../utils/mockData";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  margin: auto;
  width: 45vw;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 65vw;
  }
  @media (max-width: 500px) {
    width: 95vw;
  }
`;

export const Leaderboard = () => {
  return (
    <div>
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
    </div>
  );
};
