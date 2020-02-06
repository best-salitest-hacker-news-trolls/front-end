import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchUser } from "../../actions/user";

const SearchForm = props => {
  const [state, setState] = useState({
    username: ""
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.fetchUser(state);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Search</label>
      <div>
        <img src="../search.svg" alt="search icon"/>
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
    padding: 5px 5px 5px 10px;
    align-self: center;
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
