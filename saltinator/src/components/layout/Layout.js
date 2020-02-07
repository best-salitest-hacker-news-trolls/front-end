import React from "react";
import styled from "styled-components";
import Navigation from "../navigation/Navigation";
import Drawer from "./Drawer";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation></Navigation>
      <Drawer></Drawer>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

const Content = styled.main`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  display: flex;
  justify-content: center;
`;
