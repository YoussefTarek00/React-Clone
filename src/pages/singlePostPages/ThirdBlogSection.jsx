import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import BgTypography from "../../components/Text component/BgTypography";
import { Body1TypographyStyles } from "../../components/Text component/Blog Section/Body1Typography";

const ThirdBlogSection = () => {
  const theme = useTheme();
  const classes = Body1TypographyStyles();

  return (
    <Stack>
      <Box>
        <Typography variant="h5" className={classes.root}>
          Can we just do more minor releases?{" "}
        </Typography>
        <Typography variant="body1">
          Generally, we do use minor releases for introducing new features.
        </Typography>
        <Typography variant="body1" className={classes.root}>
          However, this isn’t always possible. Sometimes, new features are
          interconnected with other new features which have not yet been fully
          completed and that we’re still actively iterating on. We can’t release
          them separately because their implementations are related. We can’t
          version them separately because they affect the same packages (for
          example,
          <BgTypography text="react" /> and <BgTypography text="react-dom" />
          ). And we need to keep the ability to iterate on the pieces that
          aren’t ready without a flurry of major version releases, which semver
          would require us to do.{" "}
        </Typography>
        <Typography variant="body1" className={classes.root}>
          At Meta, we’ve solved this problem by building React from the{" "}
          <BgTypography text="main" /> branch, and manually updating it to a
          specific pinned commit every week. This is also the approach that
          React Native releases have been following for the last several years.
          Every stable release of React Native is pinned to a specific commit
          from the <BgTypography text="main" /> branch of the React repository.
          This lets React Native include important bugfixes and incrementally
          adopt new React features at the framework level without getting
          coupled to the global React release schedule.
        </Typography>
        <Typography variant="body1" className={classes.root}>
          We would like to make this workflow available to other frameworks and
          curated setups. For example, it lets a framework on top of React
          include a React-related breaking change before this breaking change
          gets included into a stable React release. This is particularly useful
          because some breaking changes only affect framework integrations. This
          lets a framework release such a change in its own minor version
          without breaking semver.
        </Typography>
        <Typography variant="body1" className={classes.root}>
          Rolling releases with the Canaries channel will allow us to have a
          tighter feedback loop and ensure that new features get comprehensive
          testing in the community. This workflow is closer to how TC39, the
          JavaScript standards committee,{" "}
          <Link
            href="#"
            sx={{ color: theme.palette.ColorChange.main }}
            underline="hover"
          >
            handles changes in numbered stages
          </Link>
          . New React features may be available in frameworks built on React
          before they are in a React stable release, just as new JavaScript
          features ship in browsers before they are officially ratified as part
          of the specification.
        </Typography>
      </Box>
    </Stack>
  );
};

export default ThirdBlogSection;
