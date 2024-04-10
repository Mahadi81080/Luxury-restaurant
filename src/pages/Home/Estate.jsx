import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Estate = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = estate;
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-lg dark:bg-gray-50 dark:text-gray-800 my-4">
        <div>
          <img
            src={image}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{estate_title}</h2>
          <p className="text-sm dark:text-gray-600">{description}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex justify-center items-center space-x-2">
            <div className="badge badge-outline text-violet-500 font-bold">
              {segment_name}
            </div>
            <div className="badge badge-outline text-violet-500 font-bold">
              {status}
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className="badge badge-outline text-violet-500 font-bold">
              {price}
            </div>
            <div className="badge badge-outline text-violet-500 font-bold">
              {area}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Facilities :</h2>
          <ul className="ml-8 font-medium">
            <li className="flex items-center gap-3">
              <span>
                <FaCheckCircle />
              </span>
              {facilities[0]}
            </li>
            <li className="flex items-center gap-3">
              <span>
                <FaCheckCircle />
              </span>
              {facilities[1]}
            </li>
            <li className="flex items-center gap-3">
              <span>
                <FaCheckCircle />
              </span>
              {facilities[2]}
            </li>
            <li className="flex items-center gap-3">
              <span>
                <FaCheckCircle />
              </span>
              {facilities[3]}
            </li>
          </ul>
        </div>
        <Link to={`/estate/${id}`}
          type="button"
          className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50"
        >
          View Property
        </Link>
      </div>
    </div>
  );
};

export default Estate;
