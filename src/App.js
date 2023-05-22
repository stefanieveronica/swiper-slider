import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function App() {
  return (
    <div>
      <div className="image-container">
        <img src="../images/maps/img1.png" />
        <div className="text-overlay">
          <h1>ASCENT</h1>
          <p>Explore and discover amazing lineups</p>
        </div>
      </div>
      <div className="pentagon"></div>
      <div className="container">
        <h1 className="swiper_title">Choose Your Agent</h1>
        <div className="swiper-container">
          <Swiper
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="images/agents/sova.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/agents/brimstone.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/agents/cypher.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/agents/killjoy.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/agents/raze.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/agents/breach.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/agents/harbor.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/agents/omen.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
