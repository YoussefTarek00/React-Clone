import {
  Box,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import CustomDivider from "../../components/Text component/Blog Section/CustomDivider";

const FirstBlogSection = () => {
  const theme = useTheme();

  return (
    <Stack>
      <Box>
        <Typography variant="h6" color="inherit">
          We’d like to offer the React community an option to adopt individual
          new features as soon as their design is close to final, before they’re
          released in a stable version—similar to how Meta has long used
          bleeding-edge versions of React internally. We are introducing a new
          officially supported{" "}
          <Link
            href="#"
            sx={{ color: theme.palette.ColorChange.main }}
            underline="hover"
          >
            Canary release channel
          </Link>
          . It lets curated setups like frameworks decouple adoption of
          individual React features from the React release schedule.
        </Typography>
      </Box>
      <CustomDivider />
      <Box>
        <Typography variant="h5" color="inherit">
          tl;dr
        </Typography>
        <List sx={{ listStyle: "disc", pl: 3, lineHeight: 2 }}>
          <ListItem sx={{ display: "list-item" }} disablePadding>
            We’re introducing an officially supported{" "}
            <Link
              href="#"
              sx={{ color: theme.palette.ColorChange.main }}
              underline="hover"
            >
              Canary release channel{" "}
            </Link>
            for React. Since it’s officially supported, if any regressions land,
            we’ll treat them with a similar urgency to bugs in stable releases.
          </ListItem>
          <ListItem sx={{ display: "list-item" }} disablePadding>
            Canaries let you start using individual new React features before
            they land in the semver-stable releases.
          </ListItem>
          <ListItem sx={{ display: "list-item" }} disablePadding>
            Unlike the{" "}
            <Link
              href="#"
              sx={{ color: theme.palette.ColorChange.main }}
              underline="hover"
            >
              Experimental{" "}
            </Link>
            channel, React Canaries only include features that we reasonably
            believe to be ready for adoption. We encourage frameworks to
            consider bundling pinned Canary React releases.
          </ListItem>
          <ListItem sx={{ display: "list-item" }} disablePadding>
            We will announce breaking changes and new features on our blog as
            they land in Canary releases.
          </ListItem>
          <ListItem
            sx={{ display: "list-item", fontWeight: "bold" }}
            disablePadding
          >
            As always, React continues to follow semver for every Stable
            release.
          </ListItem>
        </List>
      </Box>
    </Stack>
  );
};

export default FirstBlogSection;
