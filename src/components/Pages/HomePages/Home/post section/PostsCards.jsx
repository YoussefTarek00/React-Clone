import {
  Typography,
  Card,
  CardContent,
  Box,
  CardActions,
  Link,
  useTheme,
} from "@mui/material";

const PostsCards = ({ post }) => {
  const theme = useTheme();

  return (
    <Box>
      <Card
        elevation={3}
        sx={{
          height: { xs: "370px", sm: "270px", md: "270px", lg: "270px" },
          borderRadius: 5,
          backgroundColor: "transparent",
        }}
      >
        <CardContent>
          <Link
            sx={{ mb: 1.5 }}
            href={`blog/${post.id}`}
            underline="hover"
            color="inherit"
            variant="h4"
          >
            {post.id}
          </Link>
          <Typography sx={{ mb: 2 }} variant="body1" color="text.secondary">
            {post.title}
          </Typography>
          <Link
            sx={{ mb: 1.5 }}
            href={`/blog/${post.id}`}
            underline="none"
            color="inherit"
            variant="p"
          >
            Description: {post.body}
          </Link>
        </CardContent>
        <CardActions>
          <Link
            href={`blog/${post.id}`}
            underline="hover"
            sx={{
              mt: { xs: 3, sm: 3, md: 5, lg: 5 },
              pl: 1,
              color: theme.palette.ColorChange.main,
            }}
          >
            Read More
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PostsCards;
