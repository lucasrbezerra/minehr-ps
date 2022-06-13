import React, { createContext } from "react";
import { useSettings } from "./hooks";

const initialValues = {
  isDarkTheme: localStorage.getItem("isDarkTheme") === "true",
};

const SettingsContext = createContext(initialValues);

const SettingsProvider = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useSettings(initialValues);

  return (
    <SettingsContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
