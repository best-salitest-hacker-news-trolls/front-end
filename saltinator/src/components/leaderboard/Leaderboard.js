import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { fetchLeaderboard } from "../../actions/leaderboard";
import LeaderCard from "./LeaderCard";

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

const Leaderboard = ({ leaderboard: rawData, fetchLeaderboard }) => {
  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const leaderboard = processLeaderboard(rawData);

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

      {leaderboard.map((leader, index) => (
        <LeaderCard
          leader={leader[0]}
          salt={leader.overall_salt}
          rank={index + 1}
          key={index}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    leaderboard: state.leaderboard
  };
};

const processLeaderboard = rawData => {
  let grouped = {};

  rawData.forEach(comment => {
    if (grouped[comment.Hacker_News_User] === undefined) {
      grouped[comment.Hacker_News_User] = [comment];
    } else {
      grouped[comment.Hacker_News_User].push(comment);
    }
  });

  Object.keys(grouped).forEach(commenter => {
    const avg =
      grouped[commenter].reduce(
        (sum, { fav_salty_score: salt_score }) => sum + Number(salt_score),
        0
      ) / grouped[commenter].length;

    grouped[commenter].overall_salt = avg;
  });

  return createRanking(grouped);
};

const createRanking = grouped => {
  const ranking = Object.values(grouped).sort((a, b) =>
    a.overall_salt > b.overall_salt ? 1 : -1
  );

  return ranking;
};

export default connect(mapStateToProps, { fetchLeaderboard })(Leaderboard);
