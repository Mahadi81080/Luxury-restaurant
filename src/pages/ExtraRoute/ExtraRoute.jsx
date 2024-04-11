import Footer from "../../Components/Footer";
import Gallary from "../../Components/Gallary";
import HotelAminities from "../../Components/HotelAminities";
import Navbar from "../Navbar/Navbar";


const ExtraRoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HotelAminities></HotelAminities>
            <Gallary></Gallary>
            <Footer></Footer>
        </div>
    );
};

export default ExtraRoute;