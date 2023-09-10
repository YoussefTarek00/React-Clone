import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import BgTypography from "../../components/Text component/BgTypography";
import MarginBotTypo from "./Custom/MarginBotTypo";
import ListitemText, { ListitemTextStyles } from "./Custom/ListItemText";
import { Body1TypographyStyles } from "../../components/Text component/Blog Section/Body1Typography";

const SecondBlogSection = () => {
  const classes = ListitemTextStyles();
  const margin = Body1TypographyStyles();
  return (
    <Box sx={{ lineHeight: 2 }}>
      <Typography variant="h5" color="inherit" className={margin.root}>
        How React features are usually developed
      </Typography>
      <Typography variant="p" color="inherit">
        Typically, every React feature has gone through the same stages:
      </Typography>
      <List>
        <ListItem disablePadding>
          <MarginBotTypo text="1." />

          <ListItemText className={classes.root}>
            We develop an initial version and prefix it with{" "}
            <BgTypography text="experimental_" /> or{" "}
            <BgTypography text=" unstable_" />. The feature is only available in
            the <BgTypography text=" experimental" /> release channel. At this
            point, the feature is expected to change significantly.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <MarginBotTypo text="2." />
          <ListitemText
            text="We find a team at Meta willing to help us test this feature and
            provide feedback on it. This leads to a round of changes. As the
            feature becomes more stable, we work with more teams at Meta to try
            it out."
          />
        </ListItem>
        <ListItem disablePadding>
          <MarginBotTypo text="3." />
          <ListItemText className={classes.root}>
            Eventually, we feel confident in the design. We remove the prefix
            from the API name, and make the feature available on the{" "}
            <BgTypography text=" main" /> branch by default, which most Meta
            products use. At this point, any team at Meta can use this feature.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <MarginBotTypo text="4." />
          <ListitemText
            text=" As we build confidence in the direction, we also post an RFC for the
            new feature. At this point we know the design works for a broad set
            of cases, but we might make some last minute adjustments."
          />
        </ListItem>
        <ListItem disablePadding>
          <MarginBotTypo text="5." />
          <ListitemText
            text="When we are close to cutting an open source release, we write
            documentation for the feature and finally release the feature in a
            stable React release."
          />
        </ListItem>
      </List>
      <Box>
        <MarginBotTypo
          text=" This playbook works well for most features we’ve released so far.
          However, there can be a significant gap between when the feature is
          generally ready to use (step 3) and when it is released in open source
          (step 5)."
        />

        <br />
        <MarginBotTypo
          text=" We’d like to offer the React community an option to follow the same
          approach as Meta, and adopt individual new features earlier (as they
          become available) without having to wait for the next release cycle of
          React."
        />

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
