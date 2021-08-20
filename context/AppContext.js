import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export function ThemeWrapper({ children }) {
  const [isDark, setIsDark] = useState(false);

  const themeValue = {
    isDark,
    toggleLight: () => {
      setTimeout(() => {
        document.documentElement.style.background = "#fff";
        document.body.classList.remove("dark");
        setIsDark(false);
      }, 200);
    },
    toggleDark: () => {
      setTimeout(() => {
        document.documentElement.style.background = "#121212";
        document.body.classList.add("dark");
        setIsDark(true);
      }, 200);
    },
  };

  return (
    <AppContext.Provider value={themeValue}>{children}</AppContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(AppContext);
}

ThemeWrapper.propTypes = {
  children: PropTypes.node,
};
