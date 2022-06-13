import { useState, useEffect } from "react";

export const useSettings = (initialValues) => {
  const [isDarkTheme, setIsDarkTheme] = useState(initialValues.isDarkTheme);

  useEffect(() => {
    localStorage.setItem("isDarkTheme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return {
    isDarkTheme,
    toggleTheme,
  };
};
