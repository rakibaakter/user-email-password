import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-6xl mx-auto py-10 ">
      <div className="text-center relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Log In Here...
        </h4>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                className=" h-full w-full rounded-md border px-3 py-3 "
              />
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" password"
                name="password"
                required
                className=" h-full w-full rounded-md border px-3 py-3 "
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/3 right-3 text-xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="text-left">
              <Link>
                <a href="" className="text-blue-700 hover:underline">
                  Forgot Password?
                </a>
              </Link>
            </div>

            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="submit"
                value="Log In"
                className="bg-pink-500 text-white w-full py-2 rounded-md"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
