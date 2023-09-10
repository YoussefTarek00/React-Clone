import { Box, Stack, Typography } from "@mui/material";
import BgTypography from "../../components/Text component/BgTypography";
import Body1Typography, {
  Body1TypographyStyles,
} from "../../components/Text component/Blog Section/Body1Typography";

const FifthBlogSection = () => {
  const classes = Body1TypographyStyles();

  return (
    <Stack>
      <Box>
        <Typography variant="h5">
          Announcing breaking changes and new features early
        </Typography>
        <Body1Typography
          text="Canary releases represent our best guess of what will go into the next
          stable React release at any given time."
        />

        <Body1Typography
          text="Traditionally, we’ve only announced breaking changes at the end of the
          release cycle (when doing a major release). Now that Canary releases
          are an officially supported way to consume React, we plan to shift
          towards announcing breaking changes and significant new features as
          they land in Canaries. For example, if we merge a breaking change that
          will go out in a Canary, we will write a post about it on the React
          blog, including codemods and migration instructions if necessary.
          Then, if you’re a framework author cutting a major release that
          updates the pinned React canary to include that change, you can link
          to our blog post from your release notes. Finally, when a stable major
          version of React is ready, we will link to those already published
          blog posts, which we hope will help our team make progress faster."
        />

        <Typography variant="body1" className={classes.root}>
          We plan to document APIs as they land in Canaries—even if these APIs
          are not yet available outside of them. APIs that are only available in
          Canaries will be marked with a special note on the corresponding
          pages. This will include APIs like <BgTypography text="use" /> , and
          some others (like <BgTypography text="cache" /> and{" "}
          <BgTypography text="createServerContext" /> ) which we’ll send RFCs
          for.
        </Typography>
      </Box>
    </Stack>
  );
};

export default FifthBlogSection;
