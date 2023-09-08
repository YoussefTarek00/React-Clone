const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          bgColors: {
            main: "#fff",
          },
          SecondSectionBg: {
            main: "conic-gradient(from 90deg at -10% 100%,#bcc1cd 0deg,#bcc1cd 90deg,#fff 1turn)",
          },
          UKbgColors: {
            main: "#eee",
          },
          SearchBarBg: {
            main: "rgba(153,161,179,.2)",
          },
          SearchBarColor: {
            main: "rgb(153 161 179)",
          },
          backGroundChange: {
            main: "rgb(230 247 255)",
          },
          backGroundLetters: {
            main: "rgb(255 255 255)",
          },
           BlogCardBg: {
            main: "rgb(244,251,249, 1)",
          },
          BlogCardColor: {
            main: "#2B6E62",
          },
          ColorChange: {
            main: "rgb(8 126 164)",
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
          SecondSectionBg: {
            main: "conic-gradient(from 90deg at -10% 100%,#2b303b 0deg,#2b303b 90deg,#16181d 1turn)",
          },
          UKbgColors: {
            main: "#374151",
          },
          SearchBarBg: {
            main: "rgba(120,131,155,.2)",
          },
          SearchBarColor: {
            main: "rgb(153 161 179)",
          },
          backGroundChange: {
            main: "rgb(230 247 255)",
          },
          backGroundLetters: {
            main: "#23272f",
          },
          BlogCardBg: {
            main: "rgb(43,110,98,0.2)",
          },
          BlogCardColor: {
            main: "#44AC99",
          },
          ColorChange: {
            main: "rgb(20 158 202)",
          },
          Color: {
            main: "#eee",
          },
        }),
  },
});

export default getDesignTokens;
