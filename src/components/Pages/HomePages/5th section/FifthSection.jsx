import { Box, Button, Stack, Typography } from "@mui/material";
import { StyledSection } from "../../../Style/AccessThemes";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Button component/CustomButton";
import { useStyles } from "../../page setup/PageSetupStyle";

const FifthSection = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <StyledSection>
      <Stack spacing={2} className={classes.root}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="inherit">
            Go full-stack <br />
            with a framework
          </Typography>
          <Typography sx={{ mt: 5 }} variant="h6" color="inherit">
            React is a library. It lets you put components together, but it
            doesn’t prescribe
            <br />
            how to do routing and data fetching. To build an entire app with
            React, we <br />
            recommend a full-stack React framework like
            <Button
              href="https://nextjs.org/"
              target="_blank"
              size="large"
              variant="text"
            >
              Next.js
            </Button>
            or
            <Button
              href="https://remix.run/"
              target="_blank "
              size="large"
              variant="text"
            >
              Remix
            </Button>
          </Typography>

          <Typography variant="h6" color="inherit" sx={{ mt: 30 }}>
            React is also an architecture. Frameworks that implement it let you
            fetch data in
            <br /> asynchronous components that run on the server or even during
            the build. Read <br />
            data from a file or a database, and pass it down to your interactive
            components
          </Typography>
          <CustomButton
            icon={<WorkspacesIcon />}
            ButtonText="Get started with a framework"
            onClick={() => {
              navigate("/start-a-new-react-project");
            }}
          />
        </Box>
      </Stack>
    </StyledSection>
  );
};

export default FifthSection;
