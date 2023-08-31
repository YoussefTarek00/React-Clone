import { Box, Button, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export const myList = [
  { text: "Learn", path: "/learn" },
  { text: "Reference", path: "/reference" },
  { text: "Community", path: "/community" },
  { text: "Blog", path: "/blog" },
];

const NavbarData = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const CurrentLocation = useLocation();

  return (
    <Box>
      {myList.map((item) => {
        return (
          <Button
            key={item.text}
            variant="text"
            color="inherit"
            sx={{
              borderRadius: 10,
              fontSize: 16,
              textTransform: "none",
              p: 1,
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
          </Button>
        );
      })}
    </Box>
  );
};

export default NavbarData;
