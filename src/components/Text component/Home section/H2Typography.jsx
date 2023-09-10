

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    
  },
});

function H2Typography(props) {
  const classes = useStyles();

  return (
    <Typography
      variant="h2"
      className={classes.root}
      sx={{ fontSize: { xs: 25, sm: 40, md: 50 } }}
    >
      {props.text}
    </Typography>
  );
}

export default H2Typography;
