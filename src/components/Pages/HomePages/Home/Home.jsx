import { Box } from "@mui/material";
import Landing from "../Landing/Landing";
import UserListSection from "./user section/UserListSection";

const Home = () => {
  return (
    <Box>
      <Landing />
      <UserListSection />
    </Box>
  );
};

export default Home;
