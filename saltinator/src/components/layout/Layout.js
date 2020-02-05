import React from "react";
import Navigation from "../navigation/navigation";

export const Layout = ({ children }) => {
  return <Navigation>{children}</Navigation>;
};
