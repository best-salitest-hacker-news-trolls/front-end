import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { commentData } from "../../utils/mockData";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 45vw;
  margin: 0 auto;
`;

export const User = () => {
  return (
    <div>
      <form>
        <h1>Comments</h1>
        <h2>Username</h2>
      </form>

      <CommentContainer>
        {commentData.map((comment, index) => (
          <UserCard comment={comment} key={index} />
        ))}
      </CommentContainer>
    </div>
  );
};
