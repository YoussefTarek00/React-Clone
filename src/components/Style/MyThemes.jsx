const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          bgColors: {
            main: "#fff",
          },
          Color: {
            main: "#212121",
          },
        }
      : {
          // palette values for dark mode
          bgColors: {
            main: "rgb(35 39 47)",
          },
          Color: {
            main: "#eee",
          },
        }),
  },
});

export default getDesignTokens;
