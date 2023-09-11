import { makeStyles } from "@mui/styles";

export const Section7Styles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "100px",
    height: "100%",
  },
});

export const AllSections = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "100px",
    paddingLeft: "200px",
    paddingRight: "200px",
    height: "100%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "70px",
      paddingRight: "70px",
    },
  },
}));
export const LandingSection = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "100px",
    paddingLeft: "200px",
    paddingRight: "200px",
    height: "800px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "70px",
      paddingRight: "70px",
    },
  },
}));
