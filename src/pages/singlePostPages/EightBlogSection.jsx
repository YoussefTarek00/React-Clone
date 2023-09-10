import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { Body1TypographyStyles } from "../../components/Text component/Blog Section/Body1Typography";

const EightBlogSection = () => {
  const theme = useTheme();
  const classes = Body1TypographyStyles();
  return (
    <Stack>
      <Box>
        <Typography variant="h5">
          Testing libraries against both Stable and Canary versions
        </Typography>
        <Typography variant="body1" sx={{ mt: 3, mb: 3, lineHeight: 2 }}>
          We do not expect library authors to test every single Canary release
          since it would be prohibitively difficult. However, just as when we{" "}
          <Link
            href="#"
            sx={{ color: theme.palette.ColorChange.main }}
            underline="hover"
          >
            originally introduced the different React pre-release channels three
            years ago
          </Link>
          , we encourage libraries to run tests against both the latest Stable
          and latest Canary versions. If you see a change in behavior that
          wasn’t announced, please file a bug in the React repository so that we
          can help diagnose it. We expect that as this practice becomes widely
          adopted, it will reduce the amount of effort necessary to upgrade
          libraries to new major versions of React, since accidental regressions
          would be found as they land.
        </Typography>
      </Box>
      <Box>
        <Card
          sx={{
            height: "100%",
            borderRadius: 5,
            bgcolor: theme.palette.BlogCardBg.main,
            pl: 2,
          }}
        >
          <CardHeader
            sx={{ pt: 2 }}
            titleTypographyProps={{
              fontSize: 25,
              color: theme.palette.BlogCardColor.main,
            }}
            avatar={
              <DescriptionIcon
                sx={{ color: theme.palette.BlogCardColor.main }}
              />
            }
            title="Note"
          />
          <CardContent sx={{ lineHeight: 2, pb: 3, pt: 2 }}>
            <Typography variant="body1" color="inherit">
              Strictly speaking, Canary is not a new release channel—it used to
              be called Next. However, we’ve decided to rename it to avoid
              confusion with Next.js. We’re announcing it as a new release
              channel to communicate the new expectations, such as Canaries
              being an officially supported way to use React.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Typography variant="h5" className={classes.root}>
          Stable releases work like before
        </Typography>
        <Typography variant="body1">
          We are not introducing any changes to stable React releases.
        </Typography>
      </Box>
    </Stack>
  );
};

export default EightBlogSection;
