import Carousel from "react-bootstrap/Carousel";
import Banner1 from "assets/HomeBanners/ss-02.png";
import Banner2 from "assets/HomeBanners/SHS-2023-Banner_10.jpg";
import Banner3 from "assets/HomeBanners/SHS-2023-Banner_9.jpg";
import Banner4 from "assets/HomeBanners/SHS-2023-Banner_1.jpg";
import Banner5 from "assets/HomeBanners/SHS-2023-Banner_2.jpg";
import Banner6 from "assets/HomeBanners/SHS-2023-Banner_3.jpg";
import Banner7 from "assets/HomeBanners/SHS-2023-Banner_4.jpg";
import Banner8 from "assets/HomeBanners/SHS-2023-Banner_5.jpg";
import Banner9 from "assets/HomeBanners/SHS-2023-Banner_6.jpg";
import Banner10 from "assets/HomeBanners/SHS-2023-Banner_7.jpg";
import Banner11 from "assets/HomeBanners/SHS-2023-Banner_8.jpg";

import FastForwardRoundedIcon from "@mui/icons-material/FastForwardRounded";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";

function HomeSlider() {
  return (
    <Carousel
      interval={2000}
      slide={true}
      nextIcon={
        <FastForwardRoundedIcon
          style={{
            color: "white",
            fontSize: 38,
            opacity: 1,
            backgroundColor: "#1a404b",
            padding: 1,
            borderRadius: 5,
          }}
        />
      }
      prevIcon={
        <FastRewindRoundedIcon
          style={{
            color: "white",
            fontSize: 38,
            opacity: 1,
            backgroundColor: "#1a404b",
            padding: 1,
            borderRadius: 5,
          }}
        />
      }
    >
      <Carousel.Item>
        <img src={Banner1} alt="Home Banner" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner2} alt="Home Banner" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner3} alt="Home Banner" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner4} alt="Home Banner" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner5} alt="Home Banner" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner6} alt="Home Banner" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner7} alt="Home Banner" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner8} alt="Home Banner" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner9} alt="Home Banner" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner10} alt="Home Banner" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner11} alt="Home Banner" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;
