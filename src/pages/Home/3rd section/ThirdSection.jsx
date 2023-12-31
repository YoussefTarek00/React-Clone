import { Box, Stack, Typography } from "@mui/material";
import { StyledSection } from "../../../components/Style/AccessThemes";
import BgTypography from "../../../components/Text component/BgTypography";
import { AllSections } from "../../page setup/PageSetupStyle";
import H6Typography, { H6TypographyStyles } from "../../../components/Text component/Home section/H6Typography";
import H2Typography from "../../../components/Text component/Home section/H2Typography";

const ThirdSection = () => {
  const classes = AllSections();
  const MtFont = H6TypographyStyles();

  return (
    <StyledSection>
      <Stack
        spacing={2}
        className={classes.root}
      >
        <Box>
          <H2Typography text="Write components" />
          <H2Typography text="with code and markup" />

          <Typography className={MtFont.root} variant="h6" color="inherit">
            React components are JavaScript functions. Want to show some content
            conditionally? Use an <BgTypography variant="span" text="if" />{" "}
            statement. Displaying a list? Try array{" "}
            <BgTypography variant="span" text="map()" />. Learning React is
            learning programming.
          </Typography>

          <H6Typography
            text="This markup syntax is called JSX. It is a JavaScript syntax
            extension popularized by React. Putting JSX markup close to related
            rendering logic makes React components easy to create, maintain, and
            delete."
          />
        </Box>
      </Stack>
    </StyledSection>
  );
};

export default ThirdSection;
