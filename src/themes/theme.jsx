import { useContext } from "react";
import { SettingsContext } from "../contexts";
import { ThemeProvider } from "styled-components";

const fontFamily = "'Montserrat', sans-serif";

const darkTheme = {
  fontFamily,
  colors: {
    background: "#2a2a2c",
    primary: "#8ed471",
    secondary: "#5D405C",
    text: "#F6F6F6",
  },
};

const lightTheme = {
  fontFamily,
  colors: {
    background: "#F6F6F6",
    primary: "#5D405C",
    secondary: "#8ed471",
    text: "#828282",
  },
};

export const Theme = ({ children }) => {
  const { isDarkTheme } = useContext(SettingsContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
