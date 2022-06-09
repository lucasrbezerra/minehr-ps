import React from "react";
import { Router } from "./routes";
import { useTheme } from "styled-components";
import { GlobalStyles, Theme } from "./themes";

export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Router />
    </Theme>
  );
};
