import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Button component/CustomButton";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { useStyles } from "../../page setup/PageSetupStyle";

const FourthSection = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Stack spacing={2} className={classes.root}>
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
          existing <br /> HTML page, and render interactive React components
          anywhere on it.
        </Typography>

        <CustomButton
          icon={<CodeOffIcon />}
          ButtonText="Add React to your page"
          onClick={() => {
            navigate("/add-react-to-an-existing-project");
          }}
        />
      </Box>
    </Stack>
  );
};

export default FourthSection;