
import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

 export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent:'center',
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "100px",
    height: "100%",
    
  },
});

function StyleStack(props) {
  const classes = useStyles();

  return (
    <Stack spacing={2} sx={{ px: { xs: 2, sm: 5, md: 10, lg: 25 } }} className={classes.root}>
      {props.text}
    </Stack>
  );
}

export default StyleStack;


