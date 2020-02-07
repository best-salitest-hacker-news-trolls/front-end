import React, { useState, useEffect } from "react";
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

const Headers = styled.form`
  h1,
  h2 {
    font-weight: 300;
  }
`;

const User = () => {
  return (
    <div>
      <Headers>
        <h1>Comments</h1>
        <h2>Username</h2>
      </Headers>

      <CommentContainer>
        {commentData.map((comment, index) => (
          <UserCard comment={comment} key={index} />
        ))}
      </CommentContainer>
    </div>
  );
};

export default User;
