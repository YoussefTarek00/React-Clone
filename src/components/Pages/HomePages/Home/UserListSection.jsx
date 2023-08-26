import { Stack, Typography, Box, Button, ThemeProvider } from "@mui/material";
import UserList from "../../../RTK features/Slices/users/UserList";
import { ButtonTheme } from "../../../Style/AccessThemes";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const navigate = useNavigate()
  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        pt: "70px",
        pb: "7px",
        height: 2100,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" color="inherit">
          Create user interfaces
        </Typography>
        <Typography variant="h2" color="inherit">
          from components
        </Typography>
        <Typography variant="h6" color="inherit">
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
          , and{" "}
          <Typography
            variant="span"
            sx={{ bgcolor: "#616161", p: 0.5, borderRadius: 2 }}
          >
            Video
          </Typography>
          . <br />
          Then combine them into entire screens, pages, and apps.
        </Typography>
        
        <UserList />
        <Typography variant="h4" color="inherit" sx={{mt:3}}>
         For Specific Details 
        </Typography>
        <Typography variant="h6" color="inherit" >
        Click The Button Below
                </Typography>
                <Box
        sx={{
          "& button": {
            m: 1,
            borderRadius: 10,
            px: 2,
            fontWeight: "bold",
            fontSize: 17,
            textTransform: "none",
          },
        }}
      >
        <ThemeProvider theme={ButtonTheme}>
          <Button
            variant="contained"
            size="large"
            sx={{ color: "#eee", bgcolor: `primary.main` }}
            onClick={() => {
              navigate("/usertable");
            }}
          >
            More Details
          </Button>
        </ThemeProvider>
        </Box>
      </Box>
    </Stack>
  );
};

export default UserData;
