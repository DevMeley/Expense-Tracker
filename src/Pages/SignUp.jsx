import { FcGoogle } from "react-icons/fc";

function SignUp({ setSignUpModal, openLoginModal }) {
  const handleSignUp = (e) => {
    e.preventDefault();
    if (setSignUpModal) {
      setSignUpModal(false);
      openLoginModal();
    }
  };

  return (
    <div className="absolute top-8 left-1 lg:left-120 lg:top-5 shadow-xl">
      <div className="bg-white dark:bg-gray-700 lg:px-16 p-8 flex flex-col gap-6 items-center rounded-lg">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-3xl font-bold">Welcome</span>
          <span>Provide your details to below</span>
        </div>
        <button className="flex items-center gap-4 p-2 bg-gray-500 dark:text-black w-54 rounded-3xl hover:bg-gray-300">
          <span className="bg-gray-100 p-1 rounded-2xl">
            <FcGoogle className="size-5" />
          </span>
          <span>Sign up with Google</span>
        </button>
        <span>Or provide your information to sign up</span>
        <form className="flex flex-col items-center gap-4">
          <input
            className="bg-gray-200 dark:bg-gray-500 border-none outline-0 p-2 rounded-2xl w-64 lg:w-70"
            placeholder="Fullname"
          />
          <input
            className="bg-gray-200 dark:bg-gray-500 border-none outline-0 p-2 rounded-2xl w-64 lg:w-70"
            placeholder="Email"
          />
          <input
            type="password"
            className="bg-gray-200 dark:bg-gray-500 border-none outline-0 p-2 rounded-2xl w-64 lg:w-70"
            placeholder="Password"
          />
          <button
            onClick={handleSignUp}
            className="bg-blue-800 px-4 py-2 rounded-lg text-white w-48"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
