import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from "@mui/material";
import IMG1 from "../../../../Images/react_conf_elizabet.webp";
import IMG2 from "../../../../Images/react_india_hallway.webp";
import IMG3 from "../../../../Images/react_india_selfie.webp";
import IMG4 from "../../../../Images/react_india_sunil.webp";
import "swiper/css";

const slides = [{ src: IMG1 }, { src: IMG2 }, { src: IMG3 }, { src: IMG4 }];

const SwiperSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <Avatar
            src={slide.src}
            alt="swiper slider"
            sx={{
              width: 355,
              height: 241,
              objectFit: "cover",
              borderRadius: "1rem",
              cursor: "pointer",
              "&hover": {
                scaleX: "10px",
              },
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
