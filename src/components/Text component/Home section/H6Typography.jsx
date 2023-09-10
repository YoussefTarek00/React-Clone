import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    
  },
});

function H6Typography(props) {
  const classes = useStyles();

  return (
    <Typography
      variant="h6"
      className={classes.root}
      sx={{mt:30, fontSize: { xs: 18, sm: 23 } }}
    >
      {props.text}
    </Typography>
  );
}

export default H6Typography;
