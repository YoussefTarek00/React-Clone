import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Box,
} from "@mui/material";

import { PropTypes } from "prop-types";

const PostsCards = ({ post }) => {
  return (
    <Box>
      <Card elevation={3} sx={{ textAlign: "center", height: "300px" }}>
        <CardHeader title={post.id} subheader={post.title} />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
            Description: {post.body}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

PostsCards.propTypes = {
  post: PropTypes.any.isRequired,
};
export default PostsCards;
