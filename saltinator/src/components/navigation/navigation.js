import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import SearchForm from "../layout/SearchForm";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  color: white;
  font-size: 40px;
  background-color: #2a3c58;
`;
const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 25px;
  padding: 20px;
  text-decoration: none;
`;
const Logo = styled.div`
  display: flex;
  white-space: nowrap;
  padding: 20px 0 0 20px;
`;
const SaltImage = styled.img`
  width: 70px;
  height: 70px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding-right: 20px;
  :visited {
    color: inherit;
  }
`;

const Navigation = () => {
  return (
    <NavBar>
      <Logo>
        <StyledLink to="/leaderboard">λ-Saltinator</StyledLink>
        <SaltImage src="salt.svg" />
      </Logo>
      <SearchForm></SearchForm>
      <NavLinks>
        <StyledLink to="/leaderboard">Leaderboard</StyledLink>
        <StyledLink to="/saved">Favorites</StyledLink>
        <StyledLink to="/login">Logout</StyledLink>
      </NavLinks>
    </NavBar>
  );
};

export default Navigation;
