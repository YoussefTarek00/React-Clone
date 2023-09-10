import { Box, Button, Link, useTheme } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ButtonBlogSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      });
  }, [id]);

  const handlePrevious = () => {
    {
      id > 1 ? navigate(`/blog/${Number(id) - 1}`) : navigate("/blog");
    }
  };
  const handleNext = () => {
    {
      id < 100 && navigate(`/blog/${Number(id) + 1}`);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          px: 5,
        }}
      >
        {post ? (
          <>
            <Button
              id="prev"
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
                  sx={{
                    position: "absolute",
                    left: { xs: 20, sm: 90 },
                    top: 75,
                  }}
                />
              }
              variant="text"
              color="inherit"
              onClick={handlePrevious}
            >
              <Link
                underline="none"
                color="inherit"
                sx={{ textTransform: "uppercase", fontSize: 13 }}
              >
                previous
              </Link>
              <Link
                sx={{ color: theme.palette.ColorChange.main, fontSize: 17 }}
                underline="hover"
              >
                Blog
              </Link>
            </Button>
            <Button
              id="next"
              endIcon={
                <KeyboardArrowRightIcon
                  sx={{
                    position: "absolute",
                    right: { xs: 20, sm: 15 },
                    top: 75,
                  }}
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
              onClick={handleNext}
            >
              <Link
                underline="none"
                color="inherit"
                sx={{ textTransform: "uppercase", fontSize: 13 }}
              >
                next
              </Link>
              <Link
                sx={{
                  color: theme.palette.ColorChange.main,
                  fontSize: 17,
                }}
                underline="hover"
              >
                React Labs:What We`ve Been Working On -March 2023
              </Link>
            </Button>
          </>
        ) : null}
      </Box>
    </>
  );
};

export default ButtonBlogSection;
