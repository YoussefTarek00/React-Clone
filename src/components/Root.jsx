import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "./Style/MyThemes";

const Root = () => {
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "dark"
      ? "dark"
      : "light"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar mode={mode} setMyMode={setMyMode} />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Root;
