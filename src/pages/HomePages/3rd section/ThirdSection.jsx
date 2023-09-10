import { Box, Stack, Typography } from "@mui/material";
import { StyledSection } from "../../../Style/AccessThemes";
import BgTypography from "../../../components/Text component/BgTypography";
import { useStyles } from "../../page setup/PageSetupStyle";

const ThirdSection = () => {
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
            Write components <br />
            with code and markup
          </Typography>
          <Typography
            sx={{ mt: 5, fontSize: { xs: 17, sm: 23 } }}
            variant="h6"
            color="inherit"
          >
            React components are JavaScript functions. Want to show some content
            conditionally? Use an <BgTypography variant="span" text="if" />{" "}
            statement. Displaying a list? Try array{" "}
            <BgTypography variant="span" text="map()"/>. Learning React is
            learning programming.
          </Typography>

          <Typography
            variant="h6"
            color="inherit"
            sx={{ mt: 30, fontSize: { xs: 18, sm: 23 } }}
          >
            This markup syntax is called JSX. It is a JavaScript syntax
            extension popularized by React. Putting JSX markup close to related
            rendering logic makes React components easy to create, maintain, and
            delete.
          </Typography>
        </Box>
      </Stack>
    </StyledSection>
  );
};

export default ThirdSection;
