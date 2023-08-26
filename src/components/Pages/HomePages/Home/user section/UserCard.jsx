import {
  CardActions,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Collapse,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { PropTypes } from "prop-types";
import { ExpandMore } from "../../../../Style/AccessThemes";

const UserCard = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box>
      <Card elevation={3}>
        <CardHeader title={user.username} subheader={user.name} />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            E-mail ={">"} {user.email}
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
            Phone ={">"} {user.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Website ={">"} {user.website}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
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
            <Typography paragraph>More Details:</Typography>
            <Typography>
              Address: {user.address.street}, {user.address.suite},
              {user.address.city},{user.address.zipcode},{user.address.geo.lat},
              {user.address.geo.lng}
            </Typography>
            <Typography>
              Company: {user.company.name}, {user.company.catchphrase},
              {user.company.bs}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

UserCard.propTypes = {
  user: PropTypes.any.isRequired,
};
export default UserCard;
