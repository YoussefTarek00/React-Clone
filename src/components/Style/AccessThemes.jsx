import { AppBar, InputBase, alpha, styled, IconButton } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.SearchBarBg.main,
  color: theme.palette.SearchBarColor.main,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  cursor: "pointer",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: theme.palette.SearchBarColor.main,
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));
export const SearchIconWrapper2 = styled("button")(({ theme }) => ({
  color: theme.palette.SearchBarColor.main,
  backgroundColor: theme.palette.backGroundLetters.main,
    width: ' 2.5rem',
  height: "1.25rem",
  border:'0 solid #e5e7eb',
  borderRadius: '0.375rem',
  position: "absolute",
  top: '9px',
  right: '40px',
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const SearchIconWrapper3 = styled("button")(({ theme }) => ({
  color: theme.palette.SearchBarColor.main,
  backgroundColor: theme.palette.backGroundLetters.main,
  width: ' 1.25rem',
  height: "1.25rem",
  border:'0 solid #e5e7eb',
  borderRadius: '0.375rem',
  position: "absolute",
  top: '9px',
  right: '15px',
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.bgColors.main,
  color: theme.palette.Color.main,
}));

export const StyledSection = styled("div")(({ theme }) => ({
  background: theme.palette.bgColors.main,
}));
export const StyledSecondSection = styled("div")(({ theme }) => ({
  backgroundImage: theme.palette.SecondSectionBg.main,
}));

export const UkSection = styled("div")(({ theme }) => ({
  background: theme.palette.UKbgColors.main,
}));

export const ButtonTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
  },
});

export const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
