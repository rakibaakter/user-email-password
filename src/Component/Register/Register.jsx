import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
const Register = () => {
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
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
                className=" h-full w-full rounded-md border px-3 py-3 "
              />
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                placeholder=" password"
                name="password"
                className=" h-full w-full rounded-md border px-3 py-3 "
              />
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
      </div>
    </div>
  );
};

export default Register;
