import { Box, Typography } from "@mui/material";
import Body1Typography from "../../components/Text component/Blog Section/Body1Typography";

const SixBlogSection = () => {
  return (
    <Box>
      <Typography variant="h5">Canaries must be pinned</Typography>
      <Body1Typography text="  If you decide to adopt the Canary workflow for your app or framework,
        make sure you always pin the exact version of the Canary you’re using.
        Since Canaries are pre-releases, they may still include breaking
        changes."/>
      
    </Box>
  );
};

export default SixBlogSection;
