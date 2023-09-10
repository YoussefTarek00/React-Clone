import { Stack, Typography, Box, Button, ThemeProvider } from "@mui/material";
import BgTypography from "../../../components/Text component/BgTypography";
import { useStyles } from "../../page setup/PageSetupStyle";
import { StyledSecondSection } from "../../../components/Style/AccessThemes";
import H6Typography from "../../../components/Text component/Home section/H6Typography";
import H2Typography from "../../../components/Text component/Home section/H2Typography";

const SecondSection = () => {
  const classes = useStyles();

  return (
    <StyledSecondSection>
      <Stack
        spacing={2}
        className={classes.root}
        sx={{ px: { xs: 2, sm: 5, md: 10, lg: 25 } }}
      >
        <Box>
          <H2Typography text=" Create user interfaces " />
          <br />
          <H2Typography
            text=" 
            from components"
          />

          <Typography
            sx={{ mt: 5, fontSize: { xs: 18, sm: 23 } }}
            variant="h6"
            color="inherit"
          >
            React lets you build user interfaces out of individual pieces called
            components. Create your own React components like{" "}
            <BgTypography text="Thumbnail" /> ,{" "}
            <BgTypography text=" LikeButton" />, and{" "}
            <BgTypography text="Video" />. Then combine them into entire
            screens, pages, and apps.
          </Typography>

          <H6Typography
            text=" Whether you work on your own or with thousands of other developers,
            using React feels the same. It is designed to let you seamlessly
            combine components written by independent people, teams, and
            organizations."
          />
        </Box>
      </Stack>
    </StyledSecondSection>
  );
};

export default SecondSection;