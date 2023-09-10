import { Box } from "@mui/material";
import Landing from "../../pages/HomePages/Landing";
import SecondSection from "../../pages/HomePages/SecondSection";
import ThirdSection from "../../pages/HomePages/ThirdSection";
import FourthSection from "../../pages/HomePages/FourthSection";
import FifthSection from "../../pages/HomePages/FifthSection";
import SixSection from "../../pages/HomePages/SixSection";
import SevenSection from "../../pages/HomePages/SevenSection";
import LastSection from "../../pages/HomePages/LastSection";

const Home = () => {
  return (
    <Box>
      <Landing />
      <SecondSection />
      <ThirdSection />
      <FourthSection/>
      <FifthSection/>
      <SixSection/>
      <SevenSection/>
      <LastSection />
    </Box>
  );
};

export default Home;
