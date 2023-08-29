import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FourthSection = () => {

const navigate = useNavigate()
const theme = useTheme()
  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        pt: "70px",
        pb: "7px",
        height: 800,
       
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" color="inherit">
          Add interactivity <br /> wherever you need it{" "}
        </Typography>
        <Typography sx={{ mt: 5 }} variant="h6" color="inherit">
          React components receive data and return what should appear on the
          screen. <br />
          You can pass them new data in response to an interaction, like when
          the user <br />
          types into an input. React will then update the screen to match the
          new data.
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ mt: 30 }}>
          You don’t have to build your whole page in React. Add React to your
          existing <br/> HTML page, and render interactive React components anywhere
          on it.
        </Typography>
        <Box sx={{ "& button": {
            mt: 5,
            borderRadius: 10,
            px: 3,
            fontWeight: "bold",
            fontSize: 17,
            textTransform: "none", color: theme.palette.Color.main}}}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            navigate("/add-react-to-an-existing-project");
          }}
        >
{'</>'} Add React to your page {'>'}
        </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default FourthSection;
