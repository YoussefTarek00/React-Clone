import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import metaLogo from "../../../../../Images/meta-removebg-preview.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { StyledSecondSection } from "../../../Style/AccessThemes";

const Footer = () => {
  return (
    <StyledSecondSection height= "100vh" >
      <Container>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        sx={{ mt: 20}}
      >
        <Grid item xs={6} sm={6} md={4} lg={2}>
          <Link
            href="https://opensource.fb.com/"
            target="_blank"
            underline="none"
            color="inherit"
            display="flex"
            sx={{ fontWeight: "bold" }}
          >
            <Avatar
              src={metaLogo}
              alt="meta logo"
              sx={{ width: "20px", height: "20px", mr: 0.5 }}
            />
            Meta Open Source
          </Link>
          <Typography
            variant="body1"
            color="inherit"
            sx={{ fontSize: 11, mt: 2 }}
          >
            ©2023
          </Typography>
        </Grid>

        <Grid item xs={6} sm={3} md={4} lg={2}>
          <Link
            href="#"
            underline="hover"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Learn React
          </Link>

          <Stack spacing={1.5} sx={{ mt: 2, fontSize: 14 }}>
            <Link href="#" underline="hover" color="inherit">
              Quick Start
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Installation
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Describing the UI
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Adding Interactivity
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Managing State
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Escape Hatches
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3} md={4} lg={2}>
          <Link
            href="#"
            underline="hover"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            API Reference
          </Link>
          <Stack spacing={1} sx={{ mt: 2, fontSize: 14 }}>
            <Link href="#" underline="hover" color="inherit">
              React APIs
            </Link>
            <Link href="#" underline="hover" color="inherit">
              React Dom APIs
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3} md={4} lg={2} sx={{mt:{xs:3,sm:0}}}>
          <Link
            href="#"
            underline="hover"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Community
          </Link>

          <Stack spacing={1} sx={{ mt: 2, fontSize: 14 }}>
            <Link href="#" underline="hover" color="inherit">
              Code of Conduct
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Meet the Team
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Docs Contributors
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Acknowledgements
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3} md={4} lg={2}>
          <Typography sx={{ fontWeight: "bold" }}>More</Typography>
          <Stack spacing={1} sx={{ mt: 2, fontSize: 14 }}>
            <Link href="/blog" underline="hover" color="inherit">
              Blog
            </Link>
            <Link href="#" underline="hover" color="inherit">
              React Native
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Privacy
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Terms
            </Link>
          </Stack>

          <Box sx={{ mt: 5, display: "flex" }}>
            <Link
              color="inherit"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </Link>

            <Link
              color="inherit"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <TwitterIcon />
              </IconButton>
            </Link>
            <Link
              color="inherit"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Box>
        </Grid>
      </Grid>
      </Container>
    </StyledSecondSection>
  );
};

export default Footer;
