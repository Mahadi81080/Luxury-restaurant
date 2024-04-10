import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const Slider = () => {
  
  return (
    <div className="space-y-8 mt-3 px-10">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div id="slide1" className="carousel-item relative w-full h-96">
            <img
              src="https://i.postimg.cc/XJNLXwwf/images.jpg"
              className="w-full rounded-lg"
            />
            <div className="absolute top-32 left-80 ">
              <div className="space-y-5 text-center">
                <h5 className="text-[#ed5b31] font-extrabold">
                  _______
                  <span className="text-black font-medium">
                    Luxury Hotel & Best Resort
                  </span>
                  _______
                </h5>
                <h2 className="text-4xl font-extrabold font-Gramond text-black">
                  A SYMPHONY OF COMFORT & <br />
                  <span className="text-[#ed5b31]"> CONVENIENCE.</span>
                </h2>
                <button className="btn bg-[#ed5b31] text-white px-7 ">
                  Room & Suites
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide2" className="carousel-item relative w-full h-96">
            <img
              src="https://i.postimg.cc/1tpnFtQy/download.jpg"
              className="w-full rounded-lg"
            />
            <div className="absolute top-32 left-80 ">
              <div className="space-y-5 text-center">
                <h5 className="text-[#ed5b31] font-extrabold">
                  _______
                  <span className="text-white font-medium">
                    Luxury Hotel & Best Resort
                  </span>
                  _______
                </h5>
                <h2 className="text-4xl font-extrabold font-Gramond text-white">
                  A SYMPHONY OF COMFORT & <br />
                  <span className="text-[#ed5b31]"> CONVENIENCE.</span>
                </h2>
                <button className="btn bg-[#ed5b31] text-white px-7 ">
                  Room & Suites
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="3" className="carousel-item relative w-full h-96">
            <img
              src="https://i.postimg.cc/tgGV4PKB/download-3.jpg"
              className="w-full rounded-lg"
            />
            <div className="absolute top-32 left-80 ">
              <div className="space-y-5 text-center">
                <h5 className="text-[#ed5b31] font-extrabold">
                  _______
                  <span className="text-black font-medium">
                    Luxury Hotel & Best Resort
                  </span>
                  _______
                </h5>
                <h2 className="text-4xl font-extrabold font-Gramond text-white">
                  A SYMPHONY OF COMFORT & <br />
                  <span className="text-[#ed5b31]"> CONVENIENCE.</span>
                </h2>
                <button className="btn bg-[#ed5b31] text-white px-7 ">
                  Room & Suites
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="4" className="carousel-item relative w-full h-96">
            <img
              src="https://i.postimg.cc/RZNTHcb9/images-2.jpg"
              className="w-full rounded-lg"
            />
            <div className="absolute top-32 left-80 ">
              <div className="space-y-5 text-center">
                <h5 className="text-[#ed5b31] font-extrabold">
                  _______
                  <span className="text-black font-medium">
                    Luxury Hotel & Best Resort
                  </span>
                  _______
                </h5>
                <h2 className="text-4xl font-extrabold font-Gramond text-white">
                  A SYMPHONY OF COMFORT & <br />
                  <span className="text-[#ed5b31]"> CONVENIENCE.</span>
                </h2>
                <button className="btn bg-[#ed5b31] text-white px-7 ">
                  Room & Suites
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
