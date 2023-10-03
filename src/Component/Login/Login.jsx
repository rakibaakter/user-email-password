import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.config";

const Login = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset error and success message
    setRegisterError("");
    setSuccess("");

    //log in user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("Logged in successfully");
      })
      .catch((err) => setRegisterError(err.message));
  };

  //   handle forgot password
  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    console.log(email);

    if (!email) {
      alert("give your email");
      return;
    }

    // password reset
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="max-w-6xl mx-auto py-10 ">
      <div className="text-center relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Log In Here...
        </h4>

        <form
          onSubmit={handleLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="email"
                ref={emailRef}
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
              <Link onClick={handleForgotPassword}>
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
        <div>
          {registerError && (
            <p className="text-red-700 text-2xl mt-10">{registerError}</p>
          )}
          {success && (
            <p className="text-green-700 text-2xl mt-10">{success}</p>
          )}
        </div>
        <p>
          Dont have any account?
          <Link to="/" className="text-blue-700">
            Please create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
