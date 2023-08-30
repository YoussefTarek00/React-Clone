const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          bgColors: {
            main: "#fff",
          },
          
          UKbgColors: {
            main: "#eee",
          },
          Color: {
            main: "#212121",
          },
        }
      : {
          // palette values for dark mode
          bgColors: {
            main: "#23272f",
          },
          UKbgColors: {
            main: "#374151",
          },
          Color: {
            main: "#eee",
          },
        }),
  },
});

export default getDesignTokens;
