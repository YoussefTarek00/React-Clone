import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import BgTypography from "../../../../../Text component/BgTypography";

const SecondBlogSection = () => {
  return (
    <Box sx={{ lineHeight: 2 }}>
      <Typography variant="h5" color="inherit" sx={{ mt: 3, mb: 3 }}>
        How React features are usually developed
      </Typography>
      <Typography variant="p" color="inherit">
        Typically, every React feature has gone through the same stages:
      </Typography>
      <List>
        <ListItem disablePadding>
          <Typography variant="body1" sx={{ mb: 3 }}>
            1.
          </Typography>
          <ListItemText sx={{ pl: 1 }}>
            We develop an initial version and prefix it with{" "}
            <BgTypography text="experimental_" /> or{" "}
            <BgTypography text=" unstable_" />. The feature is only available in
            the <BgTypography text=" experimental" /> release channel. At this
            point, the feature is expected to change significantly.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <Typography variant="body1" sx={{ mb: 3 }}>
            2.
          </Typography>
          <ListItemText sx={{ pl: 1 }}>
            We find a team at Meta willing to help us test this feature and
            provide feedback on it. This leads to a round of changes. As the
            feature becomes more stable, we work with more teams at Meta to try
            it out.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <Typography variant="body1" sx={{ mb: 3 }}>
            3.
          </Typography>
          <ListItemText sx={{ pl: 1 }}>
            Eventually, we feel confident in the design. We remove the prefix
            from the API name, and make the feature available on the{" "}
            <BgTypography text=" main" /> branch by default, which most Meta
            products use. At this point, any team at Meta can use this feature.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <Typography variant="body1" sx={{ mb: 3 }}>
            4.
          </Typography>
          <ListItemText sx={{ pl: 1 }}>
            As we build confidence in the direction, we also post an RFC for the
            new feature. At this point we know the design works for a broad set
            of cases, but we might make some last minute adjustments.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <Typography variant="body1" sx={{ mb: 3 }}>
            5.
          </Typography>
          <ListItemText sx={{ pl: 1 }}>
            When we are close to cutting an open source release, we write
            documentation for the feature and finally release the feature in a
            stable React release.
          </ListItemText>
        </ListItem>
      </List>
      <Box>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This playbook works well for most features we’ve released so far.
          However, there can be a significant gap between when the feature is
          generally ready to use (step 3) and when it is released in open source
          (step 5).
        </Typography>{" "}
        <br />
        <Typography variant="body1" sx={{ fontWeight: "bold", mt: 2 }}>
          We’d like to offer the React community an option to follow the same
          approach as Meta, and adopt individual new features earlier (as they
          become available) without having to wait for the next release cycle of
          React.
        </Typography>
        <br />
        <Typography variant="body1">
          As always, all React features will eventually make it into a Stable
          release.
        </Typography>
      </Box>
    </Box>
  );
};

export default SecondBlogSection;
