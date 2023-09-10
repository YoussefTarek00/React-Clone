import { Button, Stack, ThemeProvider, Typography } from "@mui/material";
import { ButtonTheme } from "../../components/Style/AccessThemes";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Body1Typography from "../../components/Text component/Blog Section/Body1Typography";

const LastSection = () => {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Body1Typography text="How do you like these docs?"/>
       
      <ThemeProvider theme={ButtonTheme}>
        <Button
          href="#"
          variant="contained"
          size="small"
          endIcon={<KeyboardArrowRightIcon />}
          sx={{
            color: "#eee",
            bgcolor: `primary.main`,
            m: 1,
            borderRadius: 10,
            px: 3,
            fontWeight: "bold",
            fontSize: 17,
            textTransform: "none",
          }}
        >
          {" "}
          Take our survey!{" "}
        </Button>
      </ThemeProvider>
    </Stack>
  );
};

export default LastSection;
