import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../actions/logout";
import { toggleNav } from "../../actions/toggleNav";
import colors from "../../styles/colors";
import SearchForm from "./SearchForm";

const Drawer = ({ isAuthenticated, logout, drawerIsVisible, toggleNav }) => {
  return (
    <Container show={drawerIsVisible}>
      <SideDrawer show={drawerIsVisible}>
        <Links>
          <SearchForm></SearchForm>
          {isAuthenticated && (
            <>
              <StyledNavLink
                activeStyle={activeStyles}
                to="/leaderboard"
                onClick={toggleNav}
              >
                Leaderboard
              </StyledNavLink>
              <StyledNavLink
                activeStyle={activeStyles}
                to="/saved"
                onClick={toggleNav}
              >
                Favorites
              </StyledNavLink>

              <StyledNavLink to="/login" onClick={logout}>
                Logout
              </StyledNavLink>
            </>
          )}

          {!isAuthenticated && (
            <StyledNavLink to="/login" onClick={toggleNav}>
              Login
            </StyledNavLink>
          )}
        </Links>
      </SideDrawer>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    drawerIsVisible: state.drawerIsVisible
  };
};

export default connect(mapStateToProps, { logout, toggleNav })(Drawer);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  pointer-events: ${props => (props.show ? `auto` : `none`)};
`;

const SideDrawer = styled.nav`
  z-index: 2;
  transition: 0.4s ease-out all;
  position: relative;
  transform: ${props => (props.show ? `translateX(0)` : `translateX(200vw)`)};
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${colors.card};
  max-width: 100vw;
  overflow-x: hidden;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const activeStyles = {
  textDecoration: "underline"
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 36px;
  margin-top: 2rem;
  color: ${colors.text};

  :hover {
    color: #bbb;
  }
`;
