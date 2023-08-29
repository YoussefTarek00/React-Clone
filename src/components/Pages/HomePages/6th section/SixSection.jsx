import { Box, Stack, Typography, Button, useTheme } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";

const SixSection = () => {
  const theme = useTheme();

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
          Use the best from <br />
          every platform
        </Typography>
        <Typography sx={{ mt: 5 }} variant="h6" color="inherit">
          People love web and native apps for different reasons. React lets you
          build both <br />
          web apps and native apps using the same skills. It leans upon each
          platform’s <br />
          unique strengths to let your interfaces feel just right on every
          platform.
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ mt: 30 }}>
          With React, you can be a web and a native developer. Your team can
          ship to many
          <br /> platforms without sacrificing the user experience. Your
          organization can bridge <br />
          the platform silos, and form teams that own entire features
          end-to-end.
        </Typography>
        <Box
          sx={{
            "& button": {
              mt: 5,
              borderRadius: 10,
              px: 3,
              fontWeight: "bold",
              fontSize: 17,
              textTransform: "none",
              color: theme.palette.Color.main,
            },
          }}
        >
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              navigate("/add-react-to-an-existing-project");
            }}
          >
            <DevicesIcon sx={{ mr: 2 }} /> Build for native platforms {">"}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default SixSection;
