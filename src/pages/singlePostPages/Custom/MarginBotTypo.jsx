

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    
  },
});

function MarginBotTypo(props) {
  const classes = useStyles();

  return (
    <Typography
      variant="body1"
      className={classes.root}
      sx={{  mb: 3 }}
    >
      {props.text}
    </Typography>
  );
}

export default MarginBotTypo;
