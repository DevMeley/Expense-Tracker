import SignUp from "./SignUp";
import Login from "./Login";

function Home({
  openSignUpModal,
  signupModal,
  openLoginModal,
  setSignUpModal,
  loginModal,
  profile,
  setProfile,
}) {
  const isModalOpen = signupModal || loginModal;
  return (
    <div className="relative">
      <div
        className={`flex flex-col justify-center items-center min-h-120 gap-8 text-center ${
          isModalOpen
            ? " bg-gray-500 opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <span className="text-blue-500 text-3xl">Budgeting made simple.</span>
        <span>
          Set limits, track expenses, get insights. Stay in control without the
          clutter.
        </span>
        <button
          onClick={openSignUpModal}
          className="px-6 py-2 bg-blue-800 text-white text-lg rounded-lg"
        >
          Get Started
        </button>
      </div>
      {signupModal && (
        <SignUp
          openLoginModal={openLoginModal}
          setSignUpModal={setSignUpModal}
        />
      )}
      {loginModal && <Login profile={profile} setProfile={setProfile} />}
    </div>
  );
}

export default Home;
