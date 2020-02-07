import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import UserCard from "./UserCard";

const CommentContainer = styled.div``;

const User = ({ comments }) => {
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
