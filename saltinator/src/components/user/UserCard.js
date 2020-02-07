import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { saveComment } from "../../actions/saving";
import { deleteComment } from "../../actions/delete";
import { useHistory } from "react-router-dom";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  margin-bottom: 10px;
  background-color: #97adce;
  @media (max-width: 900px) {
    width: 65vw;
  }
  @media (max-width: 500px) {
    width: 95vw;
  }
`;
const Button = styled.button`
  background-color: #2a3c58;
  color: white;
  height: 35px;
  font-family: "Roboto Mono", monospace;

  &:hover {
    background-color: #3e5982;
    cursor: pointer;
  }

  :disabled {
    background-color: #3c3c3c;
    opacity: 0.8;

    :hover {
      cursor: default;
    }
  }
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
  userID,
  errors,
  savedComments,
  isAuthenticated
}) => {
  const {
    location: { pathname }
  } = useHistory();

  const isSaved = savedComments.filter(
    item => item.favorite_comments === comment
  ).length;

  const buttonText = () => {
    if (!errors && isSaved) {
      return "Saved";
    } else {
      return "Save";
    }
  };

  const disableButton = () => {
    if (isSaved) {
      return true;
    } else return false;
  };

  return (
    <Card>
      {pathname !== "/saved" ? (
        <>
          <div>
            "{comment}"<br />- {hackerNewsUser}
          </div>
          {isAuthenticated && (
            <Button
              disabled={disableButton()}
              onClick={() =>
                saveComment(userID, { userID, comment, username, salt_score })
              }
            >
              {buttonText(comment)}
            </Button>
          )}
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
    userID: state.userID,
    errors: state.errors,
    savedComments: state.savedComments,
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps, { saveComment, deleteComment })(
  UserCard
);
