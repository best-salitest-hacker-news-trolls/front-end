import React, { useEffect } from "react";
import UserCard from "../user/UserCard";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/saved";

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 45vw;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 70vw;
  }
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

const Saved = ({ userID, savedComments, fetchComments }) => {
  useEffect(() => {
    fetchComments(userID);
  }, [fetchComments, userID]);

  return (
    <div>
      <form>
        <h1>Saved Comments</h1>
      </form>

      <CommentContainer>
        {savedComments.map((comment, index) => (
          <UserCard comment={comment} key={index} />
        ))}
      </CommentContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userID: state.userID,
    savedComments: state.savedComments
  };
};

export default connect(mapStateToProps, { fetchComments })(Saved);
