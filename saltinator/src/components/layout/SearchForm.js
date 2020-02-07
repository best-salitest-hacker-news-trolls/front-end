import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { fetchUser } from "../../actions/user";

const SearchForm = ({ fetchUser }) => {
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchUser(username, history);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Search</label>
      <div>
        <img src="../search.svg" alt="search icon" />
        <input
          type="text"
          name="username"
          placeholder="search by username"
          onChange={handleChange}
        />
      </div>
    </Form>
  );
};

export default connect(null, { fetchUser })(SearchForm);

const Form = styled.form`
  div {
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    padding: 5px 5px 5px 20px;
    align-self: center;
    width: 30vw;
  }

  img {
    width: 20px;
  }

  input {
    margin: 0 0 0 5px;
    padding: 5px;
  }

  label {
    // push offscreen but keep label for screen readers :)
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;
