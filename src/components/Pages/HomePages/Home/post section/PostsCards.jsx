import {
  Typography,
  Card,
  CardContent,
  Box,
  Link,
  CardActions,
  useTheme,
} from "@mui/material";
import { PropTypes } from "prop-types";

const PostsCards = ({ post }) => {

const theme = useTheme()

  return (
    <Box>
      <Card
        href="/"
        elevation={3}
        sx={{
          height: "250px",
          borderRadius: 5,
          bgcolor: "transparent",
        }}
      >
        <CardContent>
          <Link
            sx={{ mb: 1.5 }}
            href="/"
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
            href="/"
            underline="none"
            color="inherit"
            variant="p"
          >
            Description: {post.body}
          </Link>
        </CardContent>
        <CardActions>
          <Link href="/" underline="hover" sx={{ mt: 5, pl: 1,color:theme.palette.ColorChange.main
 }}>
            Read More
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

PostsCards.propTypes = {
  post: PropTypes.any.isRequired,
};
export default PostsCards;
