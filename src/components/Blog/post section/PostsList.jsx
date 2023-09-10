import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../components/RTK features/Slices/posts/postSlice";
import { Box, Grid, Link, Skeleton, Typography, useTheme } from "@mui/material";
import PostsCards from "./PostsCards";
import { StyledSection } from "../../../components/Style/AccessThemes";
import BlogIcon from "../../Text component/BlogIcon";

const PostsList = () => {
  const data = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <StyledSection
      sx={{
        display: "flex",
        flexDirection: "column",
        pb: 10,
        px: { xs: 2, sm: 5, md: 10, lg: 25 },
      }}
    >
      <Box sx={{ mt: 15 }}>
        <BlogIcon text="Blog" />

        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: "700", fontSize: "40px" }}
        >
          React Blog
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 5, fontWeight: "500", whiteSpace: "pre-wrap" }}
        >
          This blog is the official source for the updates from the React team.
          Anything important, including release notes or deprecation notices,
          will be posted here first. You can also follow the {""}
          <Link
            href="https://twitter.com"
            underline="hover"
            sx={{ color: theme.palette.ColorChange.main }}
          >
            @reactjs
          </Link>{" "}
          account on Twitter, but you won’t miss anything essential if you only
          read this blog.
        </Typography>
      </Box>
      {data.loading && (
        <Typography variant="h2" color="inherit">
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
      {!data.loading && data.data ? (
        <Grid container spacing={2}>
          {data.data.map((post) => (
            <Grid item key={post.id} xs={12} md={12} lg={12}>
              <PostsCards post={post} />
            </Grid>
          ))}
        </Grid>
      ) : null}
    </StyledSection>
  );
};

export default PostsList;
