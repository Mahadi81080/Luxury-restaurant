import { FaArrowRight } from "react-icons/fa";
const DailyPricing = () => {
  return (
    <div>
      <section className="py-20 dark:bg-gray-100 dark:text-gray-800 mb-3 px-6">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase text-[#ed5b31]">
              The Best Pricing
            </span>
            <h2 className="text-4xl font-bold lg:text-5xl">
              Choose your best plan for Room
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col dark:bg-gray-50 rounded-2xl">
                <img className="rounded-t-2xl" src="https://i.postimg.cc/pXQQHYwR/1.png" alt="" />
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <span className="text-6xl font-bold text-[#ed5b31]">
                      $50
                      <span className="text-sm tracking-wide">/Per night</span>
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold">Standard Room</h4>
                  <hr />
                  <ul className="flex-1 mb-6 dark:text-gray-600">
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Bed & Breakfast</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Home Made Food</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Tour Guide</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Safety & security</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Bed & Breakfast</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-[#ed5b31] text-white "
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col dark:bg-gray-50 rounded-2xl">
                <img className="rounded-t-2xl" src="https://i.postimg.cc/XJjVh36w/2.png" alt="" />
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <span className="text-6xl font-bold text-[#ed5b31]">
                      $75
                      <span className="text-sm tracking-wide">/Per night</span>
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold">Deluxe Room</h4>
                  <hr />
                  <ul className="flex-1 mb-6 dark:text-gray-600">
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Bed & Breakfast</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Home Made Food</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Tour Guide</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Safety & security</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Bed & Breakfast</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-[#ed5b31] dark:text-gray-50"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col dark:bg-gray-50 rounded-2xl">
                <img className="rounded-t-2xl" src="https://i.postimg.cc/cJK73qbB/3.png" alt="" />
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <span className="text-6xl font-bold text-[#ed5b31]">
                      $99
                      <span className="text-sm tracking-wide ">/Per night</span>
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold">Premium Suite</h4>
                  <hr />
                  <ul className="flex-1 mb-6 dark:text-gray-600">
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Bed & Breakfast</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Home Made Food</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Tour Guide</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Safety & security</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-2">
                      <FaArrowRight />
                      <span>Bed & Breakfast</span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-[#ed5b31] dark:text-gray-50"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyPricing;
