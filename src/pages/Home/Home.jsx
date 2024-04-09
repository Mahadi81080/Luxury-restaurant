import Footer from "../../Components/Footer";
import Slider from "../../Components/Slider";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div className="my-3">
      <Navbar></Navbar>
      <Slider></Slider>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-3">Luxury Estates</h1>
        <p className="text-lg text-gray-600 mb-5">
          Explore our collection of luxurious properties from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10">
        {/* Estate container */}
        {estates.estates.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
