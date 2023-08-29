import { Stack, Typography, Box, Button, ThemeProvider } from "@mui/material";
// import UserList from "./UserList";
// import { ButtonTheme } from "../../../../Style/AccessThemes";
// import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  // const navigate = useNavigate();
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
          Create user interfaces <br /> from components
        </Typography>

        <Typography sx={{mt:5}} variant="h6" color="inherit">
          React lets you build user interfaces out of individual pieces called
          components.
          <br />
          Create your own React components like{" "}
          <Typography
            variant="span"
            sx={{ bgcolor: "#616161", p: 0.5, borderRadius: 2 }}
          >
            Thumbnail
          </Typography>
          ,
          <Typography
            variant="span"
            sx={{ bgcolor: "#616161", p: 0.5, borderRadius: 2 }}
          >
            LikeButton
          </Typography>
          , and
          <Typography
            variant="span"
            sx={{ bgcolor: "#616161", p: 0.5, borderRadius: 2 }}
          >
            Video
          </Typography>
          . <br />
          Then combine them into entire screens, pages, and apps.
        </Typography>

        {/* <UserList /> */}
        <Typography variant="h6" color="inherit" sx={{ mt: 30 }}>
          Whether you work on your own or with thousands of other developers,
          using <br /> React feels the same. It is designed to let you
          seamlessly combine components <br /> written by independent people,
          teams, and organizations.
        </Typography>
       
      </Box>
    </Stack>
  );
};

export default SecondSection;
