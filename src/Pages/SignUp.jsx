import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { useAuth } from "../../Utils/OauthContext";
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';

function SignUp({ setSignUpModal, openLoginModal }) {
  
   const navigate = useNavigate();
  const {user} = useAuth()

  const handleOauthLogin = async () =>{
    try {
      const GoogleLogin = await signInWithPopup(auth, googleProvider)
      console.log(GoogleLogin.user)
      setProfile(GoogleLogin.user)
       setTimeout(() => {
      navigate('/dashboard');
    }, 100)
    } catch (error) {
      console.log(error)
    }
  }

 

  return (
    <div className="absolute top-8 left-1 lg:left-120 lg:top-5 shadow-xl mt-24">
      <div className="bg-white dark:bg-gray-700 lg:px-16 p-8 flex flex-col gap-6 items-center rounded-lg">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-3xl font-bold">Welcome</span>
          <span>Sign up using the button below</span>
        </div>
         <button onClick={handleOauthLogin} className="flex items-center gap-4 p-2 bg-gray-300 dark:text-black w-54 rounded-3xl hover:bg-gray-500">
          <span className="bg-gray-100 p-1 rounded-2xl">
            <FcGoogle className="size-5"/>
          </span>
          <span>Sign in with Google</span>
        </button>
        <span className="text-sm text-center lg:w-2xs">By signing up, you agree to Budgettee’s Terms of Service and acknowledge that Budgettee’s Privacy Policy applies to you.</span>
        
      </div>
    </div>
  );
}

export default SignUp;
