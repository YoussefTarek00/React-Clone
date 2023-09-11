import { Swiper, SwiperSlide } from "swiper/react";
// import { slides } from "./SliderImages";
import { Avatar, Box, IconButton } from "@mui/material";
import IMG1 from "../../../../Images/react_conf_elizabet.webp";
import IMG2 from "../../../../Images/react_india_hallway.webp";
import IMG3 from "../../../../Images/react_india_selfie.webp";
import IMG4 from "../../../../Images/react_india_sunil.webp";
import "swiper/css";

const slides = [{ src: IMG1 }, { src: IMG2 }, { src: IMG3 }, { src: IMG4 }];

const SwiperSlider = () => {
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          "&:hover": {
            transition: "transform 0.3s",
            transformOrigin: "left center",
            transform: "scale(1.1)",
            zIndex: 1,
            borderRadius: "16px",
          },
        },
      }}
    >
      <Swiper spaceBetween={50} slidesPerView={3}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.src}>
            <Avatar
              src={slide.src}
              alt="swiper slider"
              sx={{
                width: { xs: 150, sm: 200, md: 300, lg: 355 },
                height: { xs: 120, sm: 200, md: 220, lg: 241 },
                objectFit: "cover",
                borderRadius: "1rem",
                cursor: "pointer",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperSlider;
