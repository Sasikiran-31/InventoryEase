import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useState, useMemo, useContext } from "react";
import { CssBaseline } from "@mui/material";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#1976d2" : "#90caf9",
      },
      background: {
        default: mode === "light" ? "#ffffff" : "#121212",
        paper: mode === "light" ? "#121212" : "#1e1e1e",
      },
      text: {
        secondary: mode === "light" ? "#000000" : "#ffffff",
      },
    },
  });

export const ThemeContextProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("light");

  const theme = useMemo(() => getTheme(colorMode), [colorMode]);

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
