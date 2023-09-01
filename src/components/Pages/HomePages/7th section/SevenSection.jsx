import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { StyledSection } from "../../../Style/AccessThemes";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { useNavigate } from "react-router-dom";
import ScienceIcon from "@mui/icons-material/Science";
import CustomButton from "../../Button component/CustomButton";
import DevicesIcon from "@mui/icons-material/Devices";
import { useStyles } from "../../page setup/PageSetupStyle";

const SevenSection = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <StyledSection sx={{ px: { xs: 2, sm: 5, md: 10 } }}>
      <Stack className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={6}>
            <Typography
              variant="h2"
              color="inherit"
              sx={{ fontSize: { xs: 35, sm: 40, md: 50 } }}
            >
              Upgrade when the <br />
              future is ready
            </Typography>
            <Typography
              sx={{
                mt: 5,
                pr: { sm: 0, md: 0, lg: 2 },
                fontSize: { xs: 16, sm: 19, md: 22 },
              }}
              variant="h6"
              color="inherit"
            >
              React approaches changes with care. Every React commit is tested
              on business-critical surfaces with over a billion users. Over
              100,000 React components at Meta help validate every migration
              strategy.
            </Typography>
            <Typography
              sx={{
                mt: 3,
                pr: { sm: 0, md: 0, lg: 4 },
                fontSize: { xs: 16, sm: 19, md: 22 },
              }}
              variant="h6"
              color="inherit"
            >
              The React team is always researching how to improve React. Some
              research takes years to pay off. React has a high bar for taking a
              research idea into production. Only proven approaches become a
              part of React.
            </Typography>
            <CustomButton
              icon={<DevicesIcon />}
              ButtonText="Read more React news"
              onClick={() => {
                navigate("/blog");
              }}
            />
          </Grid>

          <Grid item xs={12} md={12} lg={6} sx={{ pt: { xs: 10 } }}>
            <Typography variant="P" color="text.secondary">
              <ExpandMoreIcon /> LATEST REACT NEWS
            </Typography>

            <Grid container spacing={3} direction="row" sx={{ mt: 1 }}>
              <Grid item xs={12} md={5} lg={6}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderRadius: 5,
                    fontSize: 22,
                    height: "160px",
                  }}
                >
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{ fontSize: { xs: 15, sm: 20, md: 20, lg: 20 } }}
                  >
                    React Canaries: Incremental Feature Rollout
                  </Link>
                  <Box
                    sx={{
                      p: 1,
                      fontSize: 15,
                      mt: { xs: 3.5, sm: 7, md: 3, lg: 0 },
                    }}
                  >
                    <Typography
                      variant="P"
                      color="text.secondary"
                      display="flex"
                    >
                      <VideoLabelIcon sx={{ mr: 1 }} /> May 3,2023
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={5} lg={6}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderRadius: 5,
                    fontSize: 22,
                    height: "160px",
                  }}
                >
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{ fontSize: { xs: 15, sm: 20, md: 20, lg: 20 } }}
                  >
                    React Labs: March 2023
                  </Link>
                  <Box
                    sx={{
                      p: 1,
                      fontSize: 15,
                      mt: { xs: 7, sm: 7, md: 7, lg: 8 },
                    }}
                  >
                    <Typography
                      variant="P"
                      color="text.secondary"
                      display="flex"
                    >
                      <ScienceIcon sx={{ mr: 1 }} /> March 22,2023
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={5} lg={6}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderRadius: 5,
                    fontSize: 22,
                    height: "160px",
                  }}
                >
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{ fontSize: { xs: 15, sm: 20, md: 20, lg: 20 } }}
                  >
                    Introducing react.dev
                  </Link>
                  <Box
                    sx={{
                      p: 1,
                      fontSize: 15,
                      mt: { xs: 7, sm: 7, md: 7, lg: 8 },
                    }}
                  >
                    <Typography
                      variant="P"
                      color="text.secondary"
                      display="flex"
                    >
                      <VideoLabelIcon sx={{ mr: 1 }} /> March 16,2023
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={5} lg={6}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid",
                    borderRadius: 5,
                    fontSize: 22,
                    height: "160px",
                  }}
                >
                  <Link
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{ fontSize: { xs: 15, sm: 20, md: 20, lg: 20 } }}
                  >
                    React Labs: June 2022
                  </Link>
                  <Box
                    sx={{
                      p: 1,
                      fontSize: 15,
                      mt: { xs: 7, sm: 7, md: 7, lg: 8 },
                    }}
                  >
                    <Typography
                      variant="P"
                      color="text.secondary"
                      display="flex"
                    >
                      <ScienceIcon sx={{ mr: 1 }} /> June 15,2022
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </StyledSection>
  );
};

export default SevenSection;
