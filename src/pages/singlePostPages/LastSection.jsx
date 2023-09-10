import { Button, Stack, ThemeProvider, Typography } from "@mui/material";
import { ButtonTheme } from "../../../../../../Style/AccessThemes";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LastSection = () => {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2, mt: 2 }}>
        How do you like these docs?
      </Typography>

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
