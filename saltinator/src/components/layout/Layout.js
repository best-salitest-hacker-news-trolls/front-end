import React from "react";
import Navigation from "../navigation/Navigation";

export const Layout = ({ children }) => {
  return <Navigation>{children}</Navigation>;
};
