import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import SearchForm from "../layout/SearchForm";
import { logout } from "../../actions/logout";
import { toggleNav } from "../../actions/toggleNav";

const NavBar = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  color: white;
  font-size: 40px;
  background-color: #2a3c58;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);

  a:first-child {
    font-size: calc(16px + 1.25vw);
  }

  div:not(:first-child) a {
    font-size: calc(6px + 1vw);
  }

  @media (max-width: 900px) {
    div:not(:first-child) a {
      display: none;
    }

    form {
      display: none;
    }

    img {
      display: inline;
    }
  }
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
  align-items: center;
  margin-left: 20px;
  white-space: nowrap;
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
  width: calc(28px + 1.25vw);
  height: auto;
  transform: scaleX(-1);
  padding-top: 10px;
  margin-left: -15px;

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

const Hamburger = styled.img`
  display: none;
  filter: invert(1);
  width: 25px;
`;

const activeStyles = {
  textDecoration: "underline"
};

const Navigation = ({ logout, isAuthenticated, toggleNav }) => {
  return (
    <NavBar>
      <Logo>
        <StyledNavLink to="/leaderboard">λ-Saltinator</StyledNavLink>
        <SaltImage src="../salt.svg" />
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
        <Hamburger onClick={toggleNav} src="../hamburger.svg" />
      </NavLinks>
    </NavBar>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps, { logout, toggleNav })(Navigation);
