import { FaArrowRight } from "react-icons/fa";
const HotelAminities = () => {
  return (
    <div>
      <h2 className="text-3xl text-center py-4">
      Amenities At <span className="text-[#ed5b31]">Hotel</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 my-4">
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://i.postimg.cc/2SH7cs9g/1-1.png"
            alt=""
            className="object-cover max-w-xs object-center w-full rounded-l-md h-72 dark:bg-gray-500"
          />
          <div className=" ">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-wide">
                Our Restaurant
              </h2>
              <p className="dark:text-gray-800">
                This is the dolor sit amet adipisicing elit. Ducimus corrupti
                sit amet tempore placeat ipsa.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 font-semibold tracking-wide mt-2"
            >
              Read more{" "}
              <span className="mt-1">
                {" "}
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://i.postimg.cc/ydKxFdXK/2-1.png"
            alt=""
            className="object-cover max-w-xs object-center w-full rounded-l-md h-72 dark:bg-gray-500"
          />
          <div className=" ">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-wide">
                Spa & Beauty
              </h2>
              <p className="dark:text-gray-800">
                This is the dolor sit amet adipisicing elit. Ducimus corrupti
                sit amet tempore placeat ipsa.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 font-semibold tracking-wide mt-2"
            >
              Read more{" "}
              <span className="mt-1">
                {" "}
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://i.postimg.cc/8C4Q0zgN/3-1.png"
            alt=""
            className="object-cover max-w-xs object-center w-full rounded-l-md h-72 dark:bg-gray-500"
          />
          <div className=" ">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-wide">
                Golf & Garden
              </h2>
              <p className="dark:text-gray-800">
                This is the dolor sit amet adipisicing elit. Ducimus corrupti
                sit amet tempore placeat ipsa.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 font-semibold tracking-wide mt-2"
            >
              Read more{" "}
              <span className="mt-1">
                {" "}
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-5 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://i.postimg.cc/SKD3G1cK/4.png"
            alt=""
            className="object-cover max-w-xs object-center w-full rounded-l-md h-72 dark:bg-gray-500"
          />
          <div className=" ">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-wide">
                Fitness & Gym
              </h2>
              <p className="dark:text-gray-800">
                This is the dolor sit amet adipisicing elit. Ducimus corrupti
                sit amet tempore placeat ipsa.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 font-semibold tracking-wide mt-2"
            >
              Read more{" "}
              <span className="mt-1">
                {" "}
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAminities;
