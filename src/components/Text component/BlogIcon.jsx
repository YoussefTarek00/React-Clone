import { Link, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginBottom: 4,
    textTransform: "uppercase",
  },
});

function BlogIcon(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Link
      href="/blog"
      underline="hover"
      color={theme.palette.ColorChange.main}
      fontSize={12}
      fontWeight={700}
      width={10}
      lineHeight={2}
      className={classes.root}
    >
      {props.text} <ChevronRightIcon />
    </Link>
  );
}

export default BlogIcon;
