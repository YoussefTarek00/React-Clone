

import { Typography } from "@mui/material";



function H2Typography(props) {

  return (
    <Typography
      variant="h2"
      sx={{ fontSize: { xs: 25, sm: 40, md: 50 } }}
    >
      {props.text}
    </Typography>
  );
}

export default H2Typography;
