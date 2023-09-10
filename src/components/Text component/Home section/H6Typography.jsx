import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 30,
  },
});

function H6Typography(props) {
  const classes = useStyles();

  return (
    <Typography
      variant="h6"
      className={classes.root}
      sx={{ fontSize: { xs: 18, sm: 23 } }}
    >
      {props.text}
    </Typography>
  );
}

export default H6Typography;
