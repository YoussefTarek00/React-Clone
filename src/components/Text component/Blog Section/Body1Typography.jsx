

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const Body1TypographyStyles = makeStyles({
  root: {
    paddingTop: "24px",
    paddingBottom: "24px",
    lineHeight: 2
  },
});

function Body1Typography(props) {

  return (
    <Typography
      variant="body1"
      sx={{ mt: 3, mb: 3, lineHeight: 2 }}
    >
      {props.text}
    </Typography>
  );
}

export default Body1Typography;
