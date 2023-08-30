import {
  CardActions,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Collapse,
  Box,
} from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useState } from "react";
import { PropTypes } from "prop-types";
// import { ExpandMore } from "../../../../Style/AccessThemes";

const PostsCards = ({ post }) => {
  // const [expanded, setExpanded] = useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  return (
    <Box >
      <Card elevation={3}  sx={{textAlign:'center', height:'300px'}}>
        <CardHeader title={post.id} subheader={post.title} />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
            Description: {post.body}
        </Typography>
        </CardContent>
        {/* <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>About Post:</Typography>
            <Typography>
              Title: {post.title}
            </Typography>
            <Typography>
              Description: {post.body}
            </Typography>
          </CardContent>
        </Collapse> */}
      </Card>
    </Box>
  );
};

PostsCards.propTypes = {
  post: PropTypes.any.isRequired,
};
export default PostsCards;
