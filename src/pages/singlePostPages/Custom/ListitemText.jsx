

import { ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const ListitemTextStyles = makeStyles({
  root: {
    paddingLeft: '8px'
  },
});

function ListitemText(props) {

  return (
    <ListItemText
      sx={{ pl: 1 }}
    >
      {props.text}
    </ListItemText>
  );
}

export default ListitemText;
