import { Avatar, Box, Stack, Typography } from "@mui/material";
import ReactLogo from "../../../../../Images/logo192.png";
import Footer from "./Footer";
import GetStartedButton from "../../Button component/GetStartedButton";
import { useStyles } from "../../page setup/PageSetupStyle";

const LastSection = () => {
  const classes = useStyles();

  return (
    <>
      <Stack spacing={2} className={classes.root}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="inherit">
            Join a community
            <br />
            of millions
          </Typography>
          <Typography sx={{ mt: 5 }} variant="h6" color="inherit">
            You’re not alone. Two million developers from all over the world
            visit the React <br />
            docs every month. React is something that people and teams can agree
            on. <br />
          </Typography>

          <Typography variant="h6" color="inherit" sx={{ mt: 30 }}>
            This is why React is more than a library, an architecture, or even
            an ecosystem.
            <br /> React is a community. It’s a place where you can ask for
            help, find opportunities, <br />
            and meet new friends. You will meet both developers and designers,
            beginners <br />
            and experts, researchers and artists, teachers and students. Our
            backgrounds <br />
            may be very different, but React lets us all create user interfaces
            together.
          </Typography>

          <Box sx={{ textAlign: "center", mt: 20 }}>
            <Avatar
              src={ReactLogo}
              alt="react logo"
              sx={{ display: "block", width: 120, height: 120, margin: "auto" }}
            />
            <Typography variant="h2" color="inherit">
              Welcome to the <br /> React community
            </Typography>
          </Box>

          <GetStartedButton text="Get Started" />
        </Box>
        <Footer />
      </Stack>
    </>
  );
};

export default LastSection;