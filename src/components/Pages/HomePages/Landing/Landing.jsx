import {
  Avatar,
  Box,
  Button,
  Stack,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import ReactLogo from "../../../../../Images/logo192.png";
import { useNavigate } from "react-router-dom";
import { ButtonTheme, StyledSection } from "../../../Style/AccessThemes";

const Landing = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <StyledSection>
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pb: "7px",
          height: 700,
        }}
      >
        <Avatar
          src={ReactLogo}
          alt="react logo"
          sx={{ display: "block", width: 120, height: 120 }}
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="inherit">
            React
          </Typography>
          <Typography variant="h4" color="inherit">
            The library for web and native user interfaces
          </Typography>
        </Box>
        <Box
          sx={{
            "& button": {
              m: 1,
              borderRadius: 10,
              px: 2,
              fontWeight: "bold",
              fontSize: 17,
              textTransform: "none",
            },
          }}
        >
          <ThemeProvider theme={ButtonTheme}>
            <Button
              variant="contained"
              size="large"
              sx={{ color: "#eee", bgcolor: `primary.main` }}
              onClick={() => {
                navigate("/learn");
              }}
            >
              Learn React
            </Button>
          </ThemeProvider>
          <Button
            sx={{ color: theme.palette.Color.main }}
            variant="outlined"
            size="large"
            onClick={() => {
              navigate("/reference");
            }}
          >
            API Reference
          </Button>
        </Box>
      </Stack>
    </StyledSection>
  );
};

export default Landing;
