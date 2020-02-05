import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { saveComment } from "../../actions/saving";
import { deleteComment } from "../../actions/delete";
import { useHistory } from "react-router-dom";

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
  comment: {
    favorite_comments: comment,
    username,
    comment_id,
    Hacker_News_User: hackerNewsUser,
    fav_salt_score: salt_score
  },
  saveComment,
  deleteComment,
  userID
}) => {
  const {
    location: { pathname }
  } = useHistory();

  return (
    <Card>
      {pathname !== "/saved" ? (
        <>
          <br />"{comment}"<br />- {username}
          <Button
            onClick={() =>
              saveComment(userID, { userID, comment, username, salt_score })
            }
          >
            Save
          </Button>
        </>
      ) : (
        <>
          <br />"{comment}"<br />- {hackerNewsUser}
          <Button onClick={() => deleteComment(userID, comment_id)}>
            Delete
          </Button>
        </>
      )}
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    userID: state.userID
  };
};

export default connect(mapStateToProps, { saveComment, deleteComment })(
  UserCard
);
