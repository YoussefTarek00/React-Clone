import { Avatar, Box, Stack, Typography } from "@mui/material";
import ReactLogo from "../../../../../Images/logo192.png";
import GetStartedButton from "../../Button component/GetStartedButton";
import { useStyles } from "../../page setup/PageSetupStyle";
import { StyledSecondSection } from "../../../Style/AccessThemes";

const LastSection = () => {
  const classes = useStyles();

  return (
    <StyledSecondSection>
      <Stack
        spacing={2}
        className={classes.root}
        sx={{ px: { xs: 2, sm: 5, md: 10, lg: 25 } }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            color="inherit"
            sx={{ fontSize: { xs: 35, sm: 40, md: 50 } }}
          >
            Join a community
            <br />
            of millions
          </Typography>
          <Typography
            sx={{ mt: 5, fontSize: { xs: 18, sm: 23 } }}
            variant="h6"
            color="inherit"
          >
            You’re not alone. Two million developers from all over the world
            visit the React docs every month. React is something that people and
            teams can agree on.
          </Typography>

          <Typography
            variant="h6"
            color="inherit"
            sx={{ mt: 30, fontSize: { xs: 18, sm: 23 } }}
          >
            This is why React is more than a library, an architecture, or even
            an ecosystem. React is a community. It’s a place where you can ask
            for help, find opportunities, and meet new friends. You will meet
            both developers and designers, beginners and experts, researchers
            and artists, teachers and students. Our backgrounds may be very
            different, but React lets us all create user interfaces together.
          </Typography>

          <Box sx={{ textAlign: "center", mt: 20 }}>
            <Avatar
              src={ReactLogo}
              alt="react logo"
              sx={{ display: "block", width: 120, height: 120, margin: "auto" }}
            />
            <Typography
              variant="h2"
              color="inherit"
              sx={{ fontSize: { xs: 35, sm: 40, md: 50 } }}
            >
              Welcome to the <br /> React community
            </Typography>
          </Box>
          <GetStartedButton text="Get Started" />
        </Box>
      </Stack>
    </StyledSecondSection>
  );
};

export default LastSection;
