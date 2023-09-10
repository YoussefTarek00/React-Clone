import {
  Typography,
  Card,
  CardContent,
  Box,
  CardActions,
  Link,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostsCards = ({ post }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${post.id}`);
  };

  return (
    <Box>
      <Card
        elevation={3}
        sx={{
          height: { xs: "370px", sm: "270px", md: "270px", lg: "270px" },
          borderRadius: 5,
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={handleNavigate}
      >
        <CardContent>
          <Link sx={{ mb: 1.5 }} underline="hover" color="inherit" variant="h4">
            {post.id}
          </Link>
          <Typography sx={{ mb: 2 }} variant="body1" color="text.secondary">
            {post.title}
          </Typography>
          <Link sx={{ mb: 1.5 }} underline="none" color="inherit" variant="p">
            Description: {post.body}
          </Link>
        </CardContent>
        <CardActions>
          <Link
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
