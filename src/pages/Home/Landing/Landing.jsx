import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ReactLogo from "../../../../Images/logo192.png";
import { useNavigate } from "react-router-dom";
import { StyledSection } from "../../../components/Style/AccessThemes";
import GetStartedButton from "../../../components/Button component/GetStartedButton";
import {  LandingSection } from "../../page setup/PageSetupStyle";

const Landing = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const classes = LandingSection();

  return (
    <StyledSection>
      <Stack
        spacing={2}
        className={classes.root}
      >
        <Avatar
          src={ReactLogo}
          alt="react logo"
          sx={{ display: "block", width: 120, height: 120 }}
        />
        <Box>
          <Typography variant="h2" color="inherit">
            React
          </Typography>
          <Typography variant="h4" color="inherit">
            The library for web and native user interfaces
          </Typography>
        </Box>
        <Box>
          <GetStartedButton text="Learn React" />
          <Button
            sx={{
              color: theme.palette.Color.main,
              m: 1,
              borderRadius: 10,
              px: 2,
              fontWeight: "bold",
              fontSize: 17,
              textTransform: "none",
            }}
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
