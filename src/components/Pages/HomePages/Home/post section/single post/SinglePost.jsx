import { Box, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledSection } from "../../../../../Style/AccessThemes";
import PostDetails from "./PostDetails";
import axios from "axios";
import BlogIcon from "../../../../Text component/BlogIcon";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          setLoading(false);
          setPost(response.data);
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
        });
    }
  }, [id]);

  if (loading)
    return (
      <Typography
        variant="h2"
        color="inherit"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={650}
          height={250}
        />
      </Typography>
    );
  if (error)
    return (
      <Typography variant="h2" color="inherit">
        Error:{error}
      </Typography>
    );
  if (!post)
    return (
      <Typography variant="h2" color="inherit">
        No post to show
      </Typography>
    );

  return (
    <StyledSection
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ mt: 15, px: { xs: 2, sm: 5, md: 10, lg: 25 } }}>
        <BlogIcon text="Blog" />
      </Box>
      <PostDetails title={post.title} text={post.body} post={post} />
    </StyledSection>
  );
};

export default SinglePost;
