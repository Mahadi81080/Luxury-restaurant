import Footer from "../../Components/Footer";
import Slider from "../../Components/Slider";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";
import { Helmet } from "react-helmet-async";
import DailyPricing from "../../Components/DailyPricing";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div className="my-3">
      <Helmet>
        <title>The Luxury | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Slider></Slider>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-3">Luxury Estates</h1>
        <p className="text-lg text-gray-600 mb-5">
          Explore our collection of luxurious properties from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 lg:px-10">
        {/* Estate container */}
        {estates.estates.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
      <DailyPricing></DailyPricing>
      <Footer></Footer>
    </div>
  );
};

export default Home;
