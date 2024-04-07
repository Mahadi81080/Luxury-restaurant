import Footer from "../../Components/Footer";
import Slider from "../../Components/Slider";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div className="my-3">
            <Navbar></Navbar>
            <Slider></Slider>
            <Footer></Footer>
        </div>
    );
};

export default Home;