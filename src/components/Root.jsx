import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "./Style/LightAndDarkTheme";
import Footer from "./Pages/HomePages/8th section/Footer";
import { StyledSecondSection, StyledSection } from "./Style/AccessThemes";
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
        <StyledSecondSection>
          <Outlet />
          <Footer />
        </StyledSecondSection>
      </Box>
    </ThemeProvider>
  );
};

export default Root;
