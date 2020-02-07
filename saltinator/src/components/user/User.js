import React, { useEffect, useState} from "react";
import UserCard from "./UserCard";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { commentData } from "../../utils/mockData";
console.log(axiosWithAuth)

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
const [users, setUsers] = useState([])
  useEffect(() =>  {
    axiosWithAuth()
    .get('users/comments')
    .then(res => {
      setUsers(res.data);
      console.log(res.data)
    })
    .catch(error => {
      console.log("Server Error", error);
    })
  }, [])

  return (
    <div>
      <form>
        <h1>Comments</h1>
        <h2>Username</h2>
      </form>

      <CommentContainer>
        {users.map((comment, index) => (
          <UserCard comment={comment} key={index} />
        ))}
      </CommentContainer>
    </div>
  );
};

export default User;
