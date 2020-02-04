import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { saveComment } from "../../actions/saving";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40vw;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px;
  background-color: #97adce;
`;
const Button = styled.button`
  background-color: #2a3c58;
  color: white;
  height: 35px;
  font-family: "Roboto Mono", monospace;
  &:hover{
  background-color: #3E5982;
`;

const UserCard = ({
  comment: { favorite_comments: comment, username, fav_salt_score: salt_score },
  saveComment,
  userID
}) => {
  return (
    <Card>
      <br />"{comment}"<br />- {username}
      <Button
        onClick={() => saveComment(userID, { userID, comment, salt_score })}
      >
        Save
      </Button>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    userID: state.userID
  };
};

export default connect(mapStateToProps, { saveComment })(UserCard);
