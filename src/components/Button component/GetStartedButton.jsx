import {  Button, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonTheme } from "../Style/AccessThemes";

const GetStartedButton = ({text }) => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={ButtonTheme}>
      <Button
        variant="contained"
        size="large"
        sx={{
          color: "#eee",
          bgcolor: `primary.main`,
          m: 1,
          borderRadius: 10,
          px: 3,
          fontWeight: "bold",
          fontSize: 17,
          textTransform: "none",
        }}
        onClick={() => { navigate("/learn") }}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default GetStartedButton;
