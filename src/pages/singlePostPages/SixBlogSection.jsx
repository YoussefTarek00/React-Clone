import { Box, Typography } from "@mui/material";

const SixBlogSection = () => {
  return (
    <Box>
      <Typography variant="h5">Canaries must be pinned</Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 3, lineHeight: 2 }}>
        If you decide to adopt the Canary workflow for your app or framework,
        make sure you always pin the exact version of the Canary you’re using.
        Since Canaries are pre-releases, they may still include breaking
        changes.
      </Typography>
    </Box>
  );
};

export default SixBlogSection;
