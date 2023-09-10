import { Avatar, Box, Stack, Typography } from "@mui/material";
import ReactLogo from "../../../../Images/logo192.png";
import GetStartedButton from "../../../components/Button component/GetStartedButton";
import { useStyles } from "../../page setup/PageSetupStyle";
import { StyledSecondSection } from "../../../components/Style/AccessThemes";
import H6Typography, { H6TypographyStyles } from "../../../components/Text component/Home section/H6Typography";
import H2Typography from "../../../components/Text component/Home section/H2Typography";

const LastSection = () => {
  const classes = useStyles();
  const MtFont = H6TypographyStyles();

  return (
    <StyledSecondSection>
      <Stack
        spacing={2}
        className={classes.root}
        sx={{ px: { xs: 2, sm: 5, md: 10, lg: 25 } }}
      >
        <Box>
          <H2Typography text=" Join a community" />
          <br />
          <H2Typography text="of millions" />

          <Typography
            className={MtFont.root}
            variant="h6"
            color="inherit"
          >
            You’re not alone. Two million developers from all over the world
            visit the React docs every month. React is something that people and
            teams can agree on.
          </Typography>

          <H6Typography
            text="This is why React is more than a library, an architecture, or even
            an ecosystem. React is a community. It’s a place where you can ask
            for help, find opportunities, and meet new friends. You will meet
            both developers and designers, beginners and experts, researchers
            and artists, teachers and students. Our backgrounds may be very
            different, but React lets us all create user interfaces together."
          />

          <Box sx={{ mt: 20 }}>
            <Avatar
              src={ReactLogo}
              alt="react logo"
              sx={{ display: "block", width: 120, height: 120, margin: "auto" }}
            />
            <H2Typography text="Welcome to the" />
            <br />
            <H2Typography text="React community" />
          </Box>
          <GetStartedButton text="Get Started" />
        </Box>
      </Stack>
    </StyledSecondSection>
  );
};

export default LastSection;
