import React from "react";
import { Router } from "./routes";
import { GlobalStyles, Theme } from "./themes";
import { SettingsProvider, ChartsProvider } from "./contexts";

export const App = () => {
  return (
    <SettingsProvider>
      <ChartsProvider>
        <Theme>
          <GlobalStyles />
          <Router />
        </Theme>
      </ChartsProvider>
    </SettingsProvider>
  );
};
