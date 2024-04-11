import { Helmet } from "react-helmet-async";
import Footer from "../../Components/Footer";
import Gallary from "../../Components/Gallary";
import HotelAminities from "../../Components/HotelAminities";
import Navbar from "../Navbar/Navbar";


const ExtraRoute = () => {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Navbar></Navbar>
            <HotelAminities></HotelAminities>
            <Gallary></Gallary>
            <Footer></Footer>
        </div>
    );
};

export default ExtraRoute;