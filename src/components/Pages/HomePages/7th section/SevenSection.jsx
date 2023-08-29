import { Box, Grid, Link, Stack, Typography,Button, useTheme } from "@mui/material";
import { StyledSection } from "../../../Style/AccessThemes";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import DevicesIcon from '@mui/icons-material/Devices';
import { useNavigate } from "react-router-dom";

const SevenSection = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  return (
    <StyledSection>
      <Stack
        sx={{
          width: "100%",
          pt: "70px",
          pb: "7px",
          height: 800,
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} sx={{ pl: 7 }}>
            <Typography variant="h2" color="inherit">
              Upgrade when the future is ready
            </Typography>
            <Typography sx={{ mt: 5 }} variant="h6" color="inherit">
              React approaches changes with care. Every React <br />
              commit is tested on business-critical surfaces with
              <br /> over a billion users. Over 100,000 React components <br />
              at Meta help validate every migration strategy.
            </Typography>
            <Typography sx={{ mt: 3 }} variant="h6" color="inherit">
              The React team is always researching how to improve <br />
              React. Some research takes years to pay off. React has
              <br /> a high bar for taking a research idea into production.
              <br /> Only proven approaches become a part of React.
              <br />
            </Typography>
          </Grid>

          <Grid item xs={12} md={5} lg={4}>
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
                  }}
                >
                  <Link href="#" underline="hover" color="inherit">
                    React Canaries: Incremental Feature Rollout
                  </Link>
                  <Box sx={{ p: 1, fontSize: 15 }}>
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
                  }}
                >
                  <Link href="#" underline="hover" color="inherit">
                    React Canaries: Incremental Feature Rollout
                  </Link>
                  <Box sx={{ p: 1, fontSize: 15 }}>
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
                  }}
                >
                  <Link href="#" underline="hover" color="inherit">
                    React Canaries: Incremental Feature Rollout
                  </Link>
                  <Box sx={{ p: 1, fontSize: 15 }}>
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
                  }}
                >
                  <Link href="#" underline="hover" color="inherit">
                    React Canaries: Incremental Feature Rollout
                  </Link>
                  <Box sx={{ p: 1, fontSize: 15 }}>
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
            </Grid>
          </Grid>
          <Box sx={{ "& button": {
            mt: 5,
            ml:5,
            borderRadius: 10,
            px: 3,
            fontWeight: "bold",
            fontSize: 17,
            textTransform: "none", color: theme.palette.Color.main}}}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            navigate("/add-react-to-an-existing-project");
          }}
        >
<DevicesIcon  sx={{mr:2}}/>Read more React news {'>'}
        </Button>
        </Box>
        </Grid>
      </Stack>
    </StyledSection>
  );
};

export default SevenSection;
