import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Components/Footer";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, name, image } = data;
    updateUserProfile(name, image)
      .then((result) => {
        console.log("update profile", result);
        toast.success("Your Profile update");
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occurred during Update Profile.");
      });
  };
  return (
    <div>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <Navbar></Navbar>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex justify-center my-3"
      >
        <div className="flex flex-col max-w-md p-6 rounded-md shadow-lg sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-3 text-center">
            <h1 className="my-2 text-xl font-bold">
              The user information is provided inside the input field given
              below, you can change it if you want.
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="space-y-2">
              <div>
                <label htmlFor="text" className="block mb-2 text-sm">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={user ? user.displayName : "user name not found"}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <label htmlFor="text" className="block mb-2 text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo url"
                  placeholder={user ? user.photoURL : "Not PhotoURL"}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  {...register("image")}
                />
                {errors.image && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <label htmlFor="text" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="text"
                  placeholder={user ? user.email : "not found email"}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                    {...register("password", { required: true })}
                  />
                  <span
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="-ml-6 text-lg"
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <div>
                <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
