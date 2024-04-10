import { useParams, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Components/Footer";
import { Helmet } from "react-helmet-async";
const EstateDetails = () => {
  const estates = useLoaderData();
  console.log(estates);
  const { id } = useParams();
  const estateInt = parseInt(id);
  const estate = estates.estates.find((estate) => estate.id === estateInt);
  console.log(estate);
  return (
    <div>
      <Helmet>
        <title>Estate_Details :{id}</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="px-12">
        <div className="bg-violet-100 p-20 mb-8 text-center font-extrabold text-3xl">
          <h2>Estate Details</h2>
        </div>
        <section className=" text-gray-100">
          <div className="container flex justify-center items-center flex-col-reverse mx-auto lg:flex-row">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/3 xl:w-3/5  text-gray-900">
              <img src={estate.image} alt="" />
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-snug">
                    Estate description
                  </p>
                  <p className="leading-snug">{estate.description}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-2/5 text-black p-5">
              <div className=" p-4 md:p-8 lg:p-12 bg-violet-100 rounded-lg">
                <div className="mb-8 space-y-2">
                  <div className="border-b border-gray-300 pb-3">
                    <h2 className="text-xl font-extrabold">Estate Details</h2>
                  </div>
                  <p>
                    <span className="text-lg font-medium">Segment_name </span>:
                    {estate.segment_name}
                  </p>
                  <p>
                    <span className="text-lg font-medium">Status </span>:
                    {estate.status}
                  </p>
                  <p>
                    <span className="text-lg font-medium">price </span>:
                    {estate.price}
                  </p>
                  <p>
                    <span className="text-lg font-medium">Estate-Title </span>:
                    {estate.estate_title}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="border-b border-gray-300 pb-3">
                    <h2 className="text-xl font-extrabold">
                      Contact Information
                    </h2>
                  </div>
                  <p>
                    <span className="text-lg font-medium">Phone</span> :
                    098437467254654
                  </p>
                  <p>
                    <span className="text-lg font-medium">Email</span> :
                    sahfkj@gmail.com
                  </p>
                  <p>
                    <span className="text-lg font-medium">Address</span> :
                    {estate.location}
                  </p>
                </div>
              </div>
              <button className="btn btn-primary w-full mt-4">Apply Now</button>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EstateDetails;
