import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="my-4">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div id="slide1" className="carousel-item relative h-screen w-full">
            <img
              src="https://i.postimg.cc/fT7SJs17/images.jpg"
              className="w-full "
            />
            <div className="absolute top-32 left-12 flex justify-center items-center">
              <div className="card-body items-start  text-white space-y-6 text-left">
                <h2 className="text-5xl font-extrabold font-Gramond">
                  Test your fav dish <br /><span className="text-4xl">from 
                  <span className="text-[#fea60d]"> luxury restaurent .</span></span>
                </h2>
                <button className="btn bg-[#fea60d] text-white px-7 ">
                  Explore More
                </button>
              </div>
              <div className="w-1/3">
                <img src="https://i.postimg.cc/s24wrdg2/slider-bg.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide2" className="carousel-item relative h-screen w-full">
            <img
              src="https://i.postimg.cc/fT7SJs17/images.jpg"
              className="w-full "
            />
            <div className="absolute top-32 left-12 flex justify-center items-center">
              <div className="card-body items-start  text-white space-y-6 text-left">
                <h2 className="text-5xl font-extrabold font-Gramond">
                  Test your fav dish <br /><span className="text-4xl">from 
                  <span className="text-[#fea60d]"> luxury restaurent .</span></span>
                </h2>
                <button className="btn bg-[#fea60d] text-white px-7 ">
                  Explore More
                </button>
              </div>
              <div className="w-1/3">
                <img src="https://i.postimg.cc/cLhPXKtD/transparent-food.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide3" className="carousel-item relative h-screen w-full">
            <img
              src="https://i.postimg.cc/fT7SJs17/images.jpg"
              className="w-full"
            />
            <div className="absolute top-32 left-12 flex justify-center items-center">
              <div className="card-body items-start  text-white space-y-6 text-left">
                <h2 className="text-5xl font-extrabold font-Gramond">
                  Test your fav dish <br /><span className="text-4xl">from 
                  <span className="text-[#fea60d]"> luxury restaurent .</span></span>
                </h2>
                <button className="btn bg-[#fea60d] text-white px-7 ">
                  Explore More
                </button>
              </div>
              <div className="w-1/3">
                <img src="https://i.postimg.cc/s24wrdg2/slider-bg.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
