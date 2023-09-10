import { Box, Link, Typography, useTheme } from "@mui/material";
import BgTypography from "../../../../../Text component/BgTypography";

const SevenBlogSection = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">Example: React Server Components</Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 3, lineHeight: 2 }}>
        As we{" "}
        <Link
          href="#"
          sx={{ color: theme.palette.ColorChange.main }}
          underline="hover"
        >
          announced in March
        </Link>
        , the React Server Components conventions have been finalized, and we do
        not expect significant breaking changes related to their user-facing API
        contract. However, we can’t release support for React Server Components
        in a stable version of React yet because we are still working on several
        intertwined framework-only features (such as{" "}
        <Link
          href="#"
          sx={{ color: theme.palette.ColorChange.main }}
          underline="hover"
        >
          {" "}
          asset loading
        </Link>
        ) and expect more breaking changes there.
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 3, lineHeight: 2 }}>
        This means that React Server Components are ready to be adopted by
        frameworks. However, until the next major React release, the only way
        for a framework to adopt them is to ship a pinned Canary version of
        React. (To avoid bundling two copies of React, frameworks that wish to
        do this would need to enforce resolution of
        <BgTypography text="react" />
        and <BgTypography text="react-dom" /> to the pinned Canary they ship
        with their framework, and explain that to their users. As an example,
        this is what Next.js App Router does.)
      </Typography>
    </Box>
  );
};

export default SevenBlogSection;
