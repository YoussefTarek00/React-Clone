import { Box, Button, Link, useTheme } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ButtonBlogSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        px: 5,
      }}
    >
      <Button
        sx={{
          textTransform: "none",
          display: "flex",
          flexDirection: "column",
          borderRadius: 5,
          p: 5,
          mt: 5,
          width: { xs: "10rem", sm: "20rem" },
        }}
        startIcon={
          <KeyboardArrowLeftIcon
            sx={{ position: "absolute", left: { xs: 20, sm: 90 }, top: 75 }}
          />
        }
        variant="text"
        color="inherit"
      >
        <Link
          href="/blog"
          underline="none"
          color="inherit"
          sx={{ textTransform: "uppercase", fontSize: 13 }}
        >
          previous
        </Link>
        <Link
          href="/blog"
          sx={{ color: theme.palette.ColorChange.main, fontSize: 17 }}
          underline="hover"
        >
          Blog
        </Link>
      </Button>

      <Button
        endIcon={
          <KeyboardArrowRightIcon
            sx={{ position: "absolute", right: { xs: 20, sm: 15 }, top: 75 }}
          />
        }
        variant="text"
        color="inherit"
        sx={{
          textTransform: "none",
          display: "flex",
          flexDirection: "column",
          borderRadius: 5,
          p: 5,
          mt: 5,
          width: { xs: "10rem", sm: "20rem" },
        }}
      >
        <Link
          href="#"
          underline="none"
          color="inherit"
          sx={{ textTransform: "uppercase", fontSize: 13 }}
        >
          next
        </Link>
        <Link
          href="#"
          sx={{
            color: theme.palette.ColorChange.main,
            fontSize: 17,
          }}
          underline="hover"
        >
          React Labs:What We`ve Been Working On -March 2023
        </Link>
      </Button>
    </Box>
  );
};

export default ButtonBlogSection;
