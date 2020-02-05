import React, { useEffect, useState } from "react";
import axios from "axios";
import LeaderCard from "./LeaderCard";
import { leaderboardData } from "../../utils/mockData";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Leaderboard = () => {
  return (
    <div>
      <form>
        <h1>Leaderboard</h1>

        <HeaderContainer>
          <h2>Rank</h2>
          <h2>Username</h2>
          <h2>Comments</h2>
        </HeaderContainer>
      </form>
      {leaderboardData.map((leader, index) => (
        <LeaderCard leader={leader} key={index} />
      ))}
    </div>
  );
};
