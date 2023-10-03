// import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsAccepted = e.target.terms.checked;
    console.log(email, password, termsAccepted);

    // reset error and success message
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("password must have atleast 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("password should have atleast one capital character");
      return;
    } else if (!termsAccepted) {
      setRegisterError("Please Accept our terms and conditions");
      return;
    } else {
      // create user
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setSuccess("Registration succeed");
        })
        .catch((error) => {
          setRegisterError(error.message);
        });
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 ">
      <div className="text-center relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Please Register Here...
        </h4>
        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter your details to register.
        </p>

        <form
          onSubmit={handleRegisterSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
        >
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
            <div className="relative h-11 w-full min-w-[200px] text-left">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms" className="ml-3">
                Accept our
                <a href="#" className="text-blue-700 ml-1 hover:underline">
                  Terms and Condition
                </a>
              </label>
            </div>

            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="submit"
                value="Register Now"
                className="bg-pink-500 text-white w-full py-2 rounded-md"
              />
            </div>
          </div>
        </form>
        <div>
          {registerError && (
            <p className="text-red-700 text-2xl mt-10">{registerError}</p>
          )}
          {success && (
            <p className="text-green-700 text-2xl mt-10">{success}</p>
          )}
        </div>
        <p>
          Already have an account?
          <Link to="/login" className="text-blue-700">
            Please Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
