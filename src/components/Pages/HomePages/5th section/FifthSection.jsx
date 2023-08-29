import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { StyledSection } from "../../../Style/AccessThemes";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { useNavigate } from "react-router-dom";


const FifthSection = () => {

    const navigate = useNavigate()

const theme = useTheme()
  return (

    <StyledSection>
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          pt: "70px",
          pb: "7px",
          height: 800,
        }}
      >
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
          <Box sx={{ "& button": {
            mt: 5,
            borderRadius: 10,
            px: 3,
            fontWeight: "bold",
            fontSize: 17,
            textTransform: "none", color: theme.palette.Color.main}}}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            navigate("/start-a-new-react-project");
          }}
        >
<WorkspacesIcon sx={{mr:2}}/> Get started with a framework {'>'}
        </Button>
        </Box>
        </Box>
      </Stack>
    </StyledSection>
  );
};

export default FifthSection;
