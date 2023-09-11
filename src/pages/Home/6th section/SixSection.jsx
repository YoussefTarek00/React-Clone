import { Box, Stack, Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import CustomButton from "../../../components/Button component/CustomButton";
import { useNavigate } from "react-router-dom";
import { AllSections } from "../../page setup/PageSetupStyle";
import { StyledSecondSection } from "../../../components/Style/AccessThemes";
import H6Typography, { H6TypographyStyles } from "../../../components/Text component/Home section/H6Typography";
import H2Typography from "../../../components/Text component/Home section/H2Typography";

const SixSection = () => {
  const navigate = useNavigate();
  const classes = AllSections();
  const MtFont = H6TypographyStyles();

  return (
    <StyledSecondSection>
      <Stack
        spacing={2}
        className={classes.root}
        
      >
        <Box >
          <H2Typography text="Use the best from" />
          <H2Typography text="every platform" />

          <Typography
            className={MtFont.root}
            variant="h6"
            color="inherit"
          >
            People love web and native apps for different reasons. React lets
            you build both web apps and native apps using the same skills. It
            leans upon each platform’s unique strengths to let your interfaces
            feel just right on every platform.
          </Typography>
          <H6Typography
            text="With React, you can be a web and a native developer. Your team can
            ship to many platforms without sacrificing the user experience. Your
            organization can bridge the platform silos, and form teams that own
            entire features end-to-end."
          />

          <CustomButton
            icon={<DevicesIcon />}
            ButtonText="Build for native platforms"
            onClick={() => {
              navigate("/react native");
            }}
          />
        </Box>
      </Stack>
    </StyledSecondSection>
  );
};

export default SixSection;
