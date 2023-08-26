import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const myList = [
  { text: "Learn", path: "/learn" },
  { text: "Reference", path: "/reference" },
  { text: "Community", path: "/community" },
  { text: "Blog", path: "/blog" },
];

const NavbarData = () => {
  const navigate = useNavigate();

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
