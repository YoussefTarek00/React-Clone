import { Box, Button, Link, Stack, Typography, useTheme } from "@mui/material";
import { StyledSection } from "../../../Style/AccessThemes";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Button component/CustomButton";
import { useStyles } from "../../page setup/PageSetupStyle";

const FifthSection = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const classes = useStyles();

  return (
    <StyledSection>
      <Stack
        spacing={2}
        className={classes.root}
        sx={{ px: { xs: 2, sm: 5, md: 10, lg: 25 } }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            color="inherit"
            sx={{ fontSize: { xs: 25, sm: 40, md: 50 } }}
          >
            Go full-stack <br />
            with a framework
          </Typography>
          <Typography
            sx={{ mt: 5, fontSize: { xs: 18, sm: 23 } }}
            variant="h6"
            color="inherit"
          >
            React is a library. It lets you put components together, but it
            doesn’t prescribe how to do routing and data fetching. To build an
            entire app with React, we recommend a full-stack React framework
            like
            <Link
              href="https://nextjs.org/"
              target="_blank"
              underline="hover"
              sx={{
                m: 1,
                color: theme.palette.ColorChange.main,
              }}
            >
              Next.js
            </Link>
            or
            <Link
              href="https://remix.run/"
              target="_blank "
              underline="hover"
              sx={{
                m: 1,
                color: theme.palette.ColorChange.main,
              }}
            >
              Remix
            </Link>
          </Typography>

          <Typography
            variant="h6"
            color="inherit"
            sx={{ mt: 30, fontSize: { xs: 18, sm: 23 } }}
          >
            React is also an architecture. Frameworks that implement it let you
            fetch data in asynchronous components that run on the server or even
            during the build. Read data from a file or a database, and pass it
            down to your interactive components
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
