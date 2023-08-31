import { Box, MenuItem, useTheme } from "@mui/material";
import { myList } from "./NavbarData";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarMenu = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const CurrentLocation = useLocation();

  return (
    <Box display="flex" justifyContent="space-around">
      {myList.map((item) => {
        return (
          <MenuItem
            key={item.text}
            sx={{
              p: 3,
              borderRadius: 10,
              bgcolor:
                CurrentLocation.pathname === `${item.path}`
                  ? theme.palette.backGroundChange.main
                  : null,
              color:
                CurrentLocation.pathname === `${item.path}`
                  ? theme.palette.ColorChange.main
                  : null,
            }}
            onClick={() => {
              navigate(item.path);
            }}
          >
            {item.text}
          </MenuItem>
        );
      })}
    </Box>
  );
};

export default NavbarMenu;
