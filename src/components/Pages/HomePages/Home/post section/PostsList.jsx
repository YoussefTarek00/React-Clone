import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../../RTK features/Slices/posts/postSlice";
import {
  Box,
  Grid,
  Link,
  Skeleton,
  Typography,
} from "@mui/material";
import PostsCards from "./PostsCards";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { StyledSection } from "../../../../Style/AccessThemes";

const PostsList = () => {
  const data = useSelector((state) => state.post);
  const dispatch = useDispatch();

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
        <Link
          href="/blog"
          underline="hover"
          sx={{
            display: "flex",
            width: 10,
            mb: 4,
            fontSize: 13,
            textTransform: "uppercase",
            fontWeight: "700",
            lineHeight: 2,
          }}
        >
          Blog <ChevronRightIcon />
        </Link>

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
          <Link href="https://twitter.com" underline="hover">
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
      {!data.loading && data.data.length ? (
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
