import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { saveComment } from "../../actions/saving";
import { deleteComment } from "../../actions/delete";
import { useHistory } from "react-router-dom";

import colors from "../../styles/colors";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  padding: 1.5rem;
  margin: auto;
  margin-bottom: 1.5rem;
  background-color: ${colors.card};
  color: ${colors.text};
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    width: 65vw;
  }
  @media (max-width: 500px) {
    width: 80vw;
  }
`;
const Button = styled.button`
  background-color: ${colors.background};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  color: white;
  height: 35px;
  font-family: "Roboto Mono", monospace;
  margin: 0;

  &:hover {
    background-color: #3e5982;
    cursor: pointer;
  }

  :disabled {
    background-color: #4c4c4c;
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
    fav_salty_score: salt_score
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
    return isSaved ? "Saved" : "Save";
  };

  const disableButton = () => {
    return isSaved ? true : false;
  };

  return (
    <Card>
      {pathname !== "/saved" ? (
        <>
          <div>
            {comment} <br />- {hackerNewsUser}
          </div>
          {isAuthenticated && (
            <Button
              disabled={disableButton()}
              onClick={() =>
                saveComment(userID, {
                  userID,
                  comment,
                  hackerNewsUser,
                  salt_score
                })
              }
            >
              {buttonText(comment)}
            </Button>
          )}
        </>
      ) : (
        <>
          <div>
            {comment} <br />- {hackerNewsUser}
          </div>
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
