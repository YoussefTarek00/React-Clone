import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../../RTK features/Slices/posts/postSlice";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import PostsCards from "./PostsCards";

const PostsList = () => {
  const data = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" color="inherit" sx={{ m: 10 }}>
        List of Posts:
      </Typography>
      {data.loading && (
        <Typography variant="h2" color="inherit" >
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={350}
            height={250}
          />
        </Typography>
      )}
      {!data.loading && data.error ? (
        <Typography variant="h2" color="inherit">
          Error: {data.error}
        </Typography>
      ) : null}
      {!data.loading && data.data.length ? (
        <Container>
          <Grid container spacing={3} alignItems="stretch">
            {data.data.map((post) => (
              <Grid item key={post.id} xs={12} md={6} lg={4}>
                <PostsCards post={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : null}
    </Box>
  );
};

export default PostsList;
