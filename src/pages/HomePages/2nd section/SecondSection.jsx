import { Stack, Typography, Box, Button, ThemeProvider } from "@mui/material";
import BgTypography from "../../../components/Text component/BgTypography";
import { useStyles } from "../../page setup/PageSetupStyle";
import { StyledSecondSection } from "../../../components/Style/AccessThemes";

const SecondSection = () => {
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
            sx={{ fontSize: { xs: 25, sm: 40, md: 50 } }}
          >
            Create user interfaces <br /> from components
          </Typography>

          <Typography
            sx={{ mt: 5, fontSize: { xs: 18, sm: 23 } }}
            variant="h6"
            color="inherit"
          >
            React lets you build user interfaces out of individual pieces called
            components.
            
            Create your own React components like{" "}
            <BgTypography text="Thumbnail" /> ,{" "}
            <BgTypography text=" LikeButton" />, and{" "}
            <BgTypography text="Video" />
            . 
            Then combine them into entire screens, pages, and apps.
          </Typography>

          <Typography
            variant="h6"
            color="inherit"
            sx={{ mt: 30, fontSize: { xs: 18, sm: 23 } }}
          >
            Whether you work on your own or with thousands of other developers,
            using  React feels the same. It is designed to let you
            seamlessly combine components  written by independent people,
            teams, and organizations.
          </Typography>
        </Box>
      </Stack>
    </StyledSecondSection>
  );
};

export default SecondSection;
