import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import SearchForm from "../layout/SearchForm";
import { logout } from "../../actions/logout";

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

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding-right: 20px;
  :visited {
    color: inherit;
  }
`;

const activeStyles = {
  textDecoration: "underline"
};

const Navigation = ({ logout }) => {
  return (
    <NavBar>
      <Logo>
        <StyledNavLink to="/leaderboard">λ-Saltinator</StyledNavLink>
        <SaltImage src="salt.svg" />
      </Logo>
      <SearchForm></SearchForm>
      <NavLinks>
        <StyledNavLink activeStyle={activeStyles} to="/leaderboard">
          Leaderboard
        </StyledNavLink>
        <StyledNavLink activeStyle={activeStyles} to="/saved">
          Favorites
        </StyledNavLink>
        <StyledNavLink to="/login" onClick={logout}>
          Logout
        </StyledNavLink>
      </NavLinks>
    </NavBar>
  );
};

export default connect(null, { logout })(Navigation);
