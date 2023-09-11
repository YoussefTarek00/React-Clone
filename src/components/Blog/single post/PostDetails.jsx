import { Box, Divider, Stack, Typography } from "@mui/material";
import PostAuthor from "./PostAuthor";
import FirstBlogSection from "../../../pages/singlePostPages/FirstBlogSection";
import SecondBlogSection from "../../../pages/singlePostPages/SecondBlogSection";
import ThirdBlogSection from "../../../pages/singlePostPages/ThirdBlogSection";
import FourthBlogSection from "../../../pages/singlePostPages/FourthBlogSection";
import FifthBlogSection from "../../../pages/singlePostPages/FifthBlogSection";
import SixBlogSection from "../../../pages/singlePostPages/SixBlogSection";
import SevenBlogSection from "../../../pages/singlePostPages/SevenBlogSection";
import EightBlogSection from "../../../pages/singlePostPages/EightBlogSection";
import ButtonBlogSection from "../../../pages/singlePostPages/ButtonBlogSection";
import LastSection from "../../../pages/singlePostPages/LastSection";
import CustomDivider from "../../Text component/Blog Section/CustomDivider";

const PostDetails = ({ title, text, post }) => {
  return (
    <>
      <Stack sx={{ px: { xs: 2, sm: 5, md: 10, lg: 25 } }}>
        <Box sx={{ lineHeight: 2 }}>
          <Typography variant="h4" color="inherit" sx={{ mb: 3 }}>
            {title}
          </Typography>

          <Typography variant="h6" color="inherit">
            {text}
            <PostAuthor userId={post.userId} />
          </Typography>
        </Box>

        <CustomDivider />

        <FirstBlogSection />

        <SecondBlogSection />

        <ThirdBlogSection />

        <FourthBlogSection />

        <FifthBlogSection />

        <SixBlogSection />

        <SevenBlogSection />

        <EightBlogSection />
      </Stack>

      <ButtonBlogSection />

      <CustomDivider />

      <LastSection />

      <CustomDivider />
    </>
  );
};

export default PostDetails;
