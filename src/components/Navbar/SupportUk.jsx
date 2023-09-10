import { Box, Link, Typography } from "@mui/material";
import { UkSection } from "../Style/AccessThemes";




const SupportUk = () => {
  return (
    <Box sx={{ display: {xs:'none', sm: "none", md: "block" } }}>
    <UkSection sx={{ display: "flex", justifyContent: "center", py: 1 }}>
      <Typography>Support Ukraine 🇺🇦</Typography>
      <Link
        sx={{ ml: 0.5 }}
        underline="hover"
        href="https://www.facebook.com/fundraisers/explore/search/charities/?query=ukraine"
        target="_blank"
      >
        Help Provide Humanitarian Aid to Ukraine
      </Link>
    </UkSection>
    </Box>
  );
};

export default SupportUk;
