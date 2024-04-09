 
import { useParams } from "react-router-dom";
const EstateDetails = () => {
    const {id }=useParams()
    return (
        <div>
            <h2>this is details</h2>
            <p>{id}</p>
        </div>
    );
};

export default EstateDetails;