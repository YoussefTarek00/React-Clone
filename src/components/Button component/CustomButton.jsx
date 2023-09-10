import {  Button, Icon, useTheme } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DevicesIcon from "@mui/icons-material/Devices";

const CustomButton = ({ ButtonText, onClick, icon }) => {
  const [showArrow, setShowArrow] = useState(false);

  const handleHover = () => {
    setShowArrow(true);
  };
  const handleLeave = () => {
    setShowArrow(false);
  };
  const theme = useTheme();

  return (
    <Button
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      variant="outlined"
      size="large"
      onClick={onClick}
      startIcon={<Icon sx={{ overflow:'visible', display:'flex'}}> {icon} </Icon>}
      sx={{
        mt: 5,
        ml: 2,
        borderRadius: 10,
        px: 3,
        fontWeight: "bold",
        fontSize: 17,
        textTransform: "none",
        color: theme.palette.Color.main,
      }}
    >
      {ButtonText}
      {showArrow ? <ArrowForwardIcon /> : <KeyboardArrowRightIcon />}
    </Button>
  );
};

export default CustomButton;
