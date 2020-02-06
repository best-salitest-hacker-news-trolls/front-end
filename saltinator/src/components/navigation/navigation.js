import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import SearchForm from "../layout/SearchForm";
import { logout } from "../../actions/logout";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  color: white;
  font-size: 40px;
  background-color: #2a3c58;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
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

const shake = keyframes`
  10%,
  90% {
    transform: translate3d(-2px, 2px, 0px) scaleX(-1) rotate(-25deg);
  }

  20%,
  80% {
    transform: translate3d(1px, -2px, 0px) scaleX(-1) rotate(-30deg);
  }

  30%,
  70% {
    transform: translate3d(-4px, 3px, 0px) scaleX(-1) rotate(-33deg);
  }

  40%,
  60% {
    transform: translate3d(2px, -3px, 0px) scaleX(-1) rotate(-25deg);
  }
`;

const SaltImage = styled.img`
  width: 70px;
  height: 70px;
  transform: scaleX(-1);

  :hover {
    animation: ${shake} 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding-right: 20px;

  :visited {
    color: inherit;
  }

  :hover {
    color: #bbb;
  }
`;

const activeStyles = {
  textDecoration: "underline"
};

const Navigation = ({ logout, isAuthenticated }) => {
  return (
    <NavBar>
      <Logo>
        <StyledNavLink to="/leaderboard">λ-Saltinator</StyledNavLink>
        <SaltImage src="salt.svg" />
      </Logo>

      {isAuthenticated && <SearchForm></SearchForm>}

      <NavLinks>
        <StyledNavLink activeStyle={activeStyles} to="/leaderboard">
          Leaderboard
        </StyledNavLink>
        {isAuthenticated && (
          <StyledNavLink activeStyle={activeStyles} to="/saved">
            Favorites
          </StyledNavLink>
        )}

        {isAuthenticated && (
          <StyledNavLink to="/login" onClick={logout}>
            Logout
          </StyledNavLink>
        )}

        {!isAuthenticated && <StyledNavLink to="/login">Login</StyledNavLink>}
      </NavLinks>
    </NavBar>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps, { logout })(Navigation);
