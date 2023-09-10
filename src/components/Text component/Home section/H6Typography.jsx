import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const H6TypographyStyles = makeStyles({
  root: {
    marginTop: 5,
    fontSize: 22
  },
});

function H6Typography(props) {

  return (
    <Typography
      variant="h6"
      sx={{mt:30, fontSize: { xs: 18, sm: 23 } }}
    >
      {props.text}
    </Typography>
  );
}

export default H6Typography;
