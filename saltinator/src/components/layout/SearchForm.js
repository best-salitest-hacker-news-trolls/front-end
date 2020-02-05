import React, { useState } from "react";
import connect from "react-redux";

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
    <form onSubmit={handleSubmit}>
      <label>Search</label>
      <input
        type="text"
        name="username"
        placeholder="search by username"
        onChange={handleChange}
      />
    </form>
  );
};

export default connect(null, { fetchUser })(SearchForm);
