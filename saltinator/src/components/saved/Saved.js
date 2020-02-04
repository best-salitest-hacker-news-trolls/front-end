import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../user/UserCard";
import { commentData } from "../../utils/mockData";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 45vw;
  margin: 0 auto;
`

export const Saved = () => {

  return (
    
      <div>

      <form>
        <h1>Saved Comments</h1>
        
        </form>
        
      <CommentContainer>
      {commentData.map((comment, index) => (
        <UserCard comment={comment} key={index} />
      ))}

    </CommentContainer>
    
    </div>
  );
};

