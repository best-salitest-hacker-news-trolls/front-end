import React from "react";
import UserCard from "./UserCard";
import styled from "styled-components";

import { commentData } from "../../utils/mockData";

const CommentContainer = styled.div`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // flex-wrap: wrap;
  // border: 1px solid red;
  // width: 90vw;
  // margin: 0 auto;
`;

const User = () => {
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

export default User;
