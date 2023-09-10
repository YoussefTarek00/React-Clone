

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#616161",
    padding: 5,
    borderRadius: 10,
  },
});

function BgTypography(props) {
  const classes = useStyles();

  return (
    <Typography variant='span' className={classes.root}>
      {props.text}
    </Typography>
  );
}

export default BgTypography;


