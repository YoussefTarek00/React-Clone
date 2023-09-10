import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import { StyledSection } from "../../../components/Style/AccessThemes";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/Button component/CustomButton";
import { useStyles } from "../../page setup/PageSetupStyle";
import H6Typography from "../../../components/Text component/Home section/H6Typography";
import H2Typography from "../../../components/Text component/Home section/H2Typography";

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
        <Box>
          <H2Typography text="Go full-stack" />
          <br />
          <H2Typography text="with a framework" />

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

          <H6Typography
            text="React is also an architecture. Frameworks that implement it let you
            fetch data in asynchronous components that run on the server or even
            during the build. Read data from a file or a database, and pass it
            down to your interactive components"
          />

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
