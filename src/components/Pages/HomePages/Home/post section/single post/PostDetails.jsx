import { Box, Divider, Stack, Typography } from "@mui/material";
import PostAuthor from "../PostAuthor";
import FirstBlogSection from "./singlePostPages/FirstBlogSection";
import SecondBlogSection from "./singlePostPages/SecondBlogSection";
import ThirdBlogSection from "./singlePostPages/ThirdBlogSection";
import FourthBlogSection from "./singlePostPages/FourthBlogSection";
import FifthBlogSection from "./singlePostPages/FifthBlogSection";
import SixBlogSection from "./singlePostPages/SixBlogSection";
import SevenBlogSection from "./singlePostPages/SevenBlogSection";
import EightBlogSection from "./singlePostPages/EightBlogSection";
import ButtonBlogSection from "./singlePostPages/ButtonBlogSection";
import LastSection from "./singlePostPages/LastSection";

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

        <Divider sx={{ mt: 3, mb: 3 }} />

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

      <Divider sx={{ mt: 8, mb: 3 }} />

      <LastSection />

      <Divider sx={{ mt: 2 }} />
    </>
  );
};

export default PostDetails;
