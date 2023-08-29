import { Box, Stack, Typography } from "@mui/material";
import { StyledSection } from "../../../Style/AccessThemes";

const ThirdSection = () => {
  return (
    <StyledSection>
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
            Write components <br />
            with code and markup
          </Typography>
          <Typography sx={{mt:5}} variant="h6" color="inherit">
            React components are JavaScript functions. Want to show some content
            <br />
            conditionally? Use an
            <Typography
              variant="span"
              sx={{ bgcolor: "#616161", px: 1, borderRadius: 2, mx: 0.5 }}
            >
              if
            </Typography>
            statement. Displaying a list? Try array
            <Typography
              variant="span"
              sx={{ bgcolor: "#616161", px: 1, borderRadius: 2, mx: 0.5 }}
            >
              map()
            </Typography>
            . Learning <br /> React is learning programming.
          </Typography>

          <Typography variant="h6" color="inherit" sx={{ mt: 30 }}>
            This markup syntax is called JSX. It is a JavaScript syntax
            extension popularized <br /> by React. Putting JSX markup close to
            related rendering logic makes React <br />
            components easy to create, maintain, and delete.
          </Typography>
        </Box>
      </Stack>
    </StyledSection>
  );
};

export default ThirdSection;
