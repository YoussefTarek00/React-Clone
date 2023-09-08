import { Box, Link, Typography, useTheme } from "@mui/material";

const FourthBlogSection = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5">
        {" "}
        Why not use experimental releases instead?{" "}
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 3, lineHeight: 2 }}>
        Although you can technically use{" "}
        <Link
          href="#"
          sx={{ color: theme.palette.ColorChange.main }}
          underline="hover"
        >
          {" "}
          Experimental{" "}
        </Link>{" "}
        releases, we recommend against using them in production because
        experimental APIs can undergo significant breaking changes on their way
        to stabilization (or can even be removed entirely). While Canaries can
        also contain mistakes (as with any release), going forward we plan to
        announce any significant breaking changes in Canaries on our blog.
        Canaries are the closest to the code Meta runs internally, so you can
        generally expect them to be relatively stable. However, you do need to
        keep the version pinned and manually scan the GitHub commit log when
        updating between the pinned commits.
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 3, lineHeight: 2 }}>
        <Typography variant="p" sx={{ fontWeight: "bold" }}>
          We expect that most people using React outside a curated setup (like a
          framework) will want to continue using the Stable releases.
        </Typography>{" "}
        However, if you’re building a framework, you might want to consider
        bundling a Canary version of React pinned to a particular commit, and
        update it at your own pace. The benefit of that is that it lets you ship
        individual completed React features and bugfixes earlier for your users
        and at your own release schedule, similar to how React Native has been
        doing it for the last few years. The downside is that you would take on
        additional responsibility to review which React commits are being pulled
        in and communicate to your users which React changes are included with
        your releases.
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 3 }}>
        If you’re a framework author and want to try this approach, please get
        in touch with us.
      </Typography>
    </Box>
  );
};

export default FourthBlogSection;
