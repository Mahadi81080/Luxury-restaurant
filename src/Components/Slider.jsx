import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="space-y-8 mt-3">
      <div className="space-y-5 text-center">
        <h5 className="text-[#ed5b31] font-extrabold">_______<span className="text-black font-medium">Luxury Hotel & Best Resort</span>_______</h5>
        <h2 className="text-4xl font-extrabold font-Gramond text-black">
          A SYMPHONY OF COMFORT & <br />
          <span className="text-[#ed5b31]"> CONVENIENCE.</span>
        </h2>
        <button className="btn bg-[#ed5b31] text-white px-7 ">
          Room & Suites
        </button>
      </div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="https://i.postimg.cc/XJNLXwwf/images.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="https://i.postimg.cc/1tpnFtQy/download.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="https://i.postimg.cc/TwgxY5XJ/download-5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="https://i.postimg.cc/RCKy3zJG/download-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="https://i.postimg.cc/fT5HXWz7/download-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="https://i.postimg.cc/RZNTHcb9/images-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="https://i.postimg.cc/02HYPz54/images-3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="https://i.postimg.cc/tgGV4PKB/download-3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          
          <img className="rounded-3xl" src="https://i.postimg.cc/Gt4pQm0B/download-4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
