import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import UserCard from "./UserCard";

const CommentContainer = styled.div`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // flex-wrap: wrap;
  // border: 1px solid red;
  // width: 90vw;
  // margin: 0 auto;
`;

const User = ({ comments }) => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("users/comments")
  //     .then(res => {
  //       setUsers(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(error => {
  //       console.log("Server Error", error);
  //     });
  // }, []);

  return (
    <div>
      <form>
        <h1>Comments</h1>
        <h2>Username</h2>
      </form>

      <CommentContainer>
        {comments.map((comment, index) => (
          <UserCard comment={comment} key={index} />
        ))}
      </CommentContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps, {})(User);
