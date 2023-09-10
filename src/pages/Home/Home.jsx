import { Box } from "@mui/material";
import Landing from "./Landing/Landing";
import SecondSection from "./2nd section/SecondSection";
import ThirdSection from "./3rd section/ThirdSection";
import FourthSection from "./4th section/FourthSection";
import FifthSection from "./5th section/FifthSection";
import SixSection from "./6th section/SixSection";
import SevenSection from "./7th section/SevenSection";
import LastSection from "./8th section/LastSection";

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
