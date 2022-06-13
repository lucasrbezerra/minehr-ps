import { useContext } from "react";
import { SettingsContext } from "../contexts";
import { ThemeProvider } from "styled-components";

const fontSizes = [64, 24, 16, 14];
fontSizes.ExtraLarge = `${fontSizes[0]}px`;
fontSizes.Large = `${fontSizes[1]}px`;
fontSizes.Medium = `${fontSizes[2]}px`;
fontSizes.Small = `${fontSizes[3]}px`;
const fontFamily = "'Montserrat', sans-serif";

const darkTheme = {
  fontSizes,
  fontFamily,
  colors: {
    background: "#2a2a2c",
    primary: "#8ed471",
    secondary: "#5D405C",
    text: "#F6F6F6",
  },
};

const lightTheme = {
  fontSizes,
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
