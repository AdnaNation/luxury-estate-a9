import "animate.css";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn, setUser, githubSignIn } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // reset error or success
    setLoginError("");
    setSuccess("");

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        setSuccess("You have logged in successfully");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  const handleGoogleSingIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        setSuccess("You have logged in successfully");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        setSuccess("You have logged in successfully");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen py-4 animate__animated animate__backInUp">
      <h2 className="text-3xl my-10 text-center font-platypi">Please Login</h2>
      <form
        onSubmit={handleLogin}
        className="bg-slate-400 p-8 bg-opacity-60 rounded md:w-3/4 lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="Password"
              className="input input-bordered w-full relative"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-4 -ml-7"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {success && <p className="text-green-600 text-center">{success}</p>}
      {loginError && <p className="text-red-700 text-center">{loginError}</p>}

      {/* other option for logging */}

      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600 flex items-center">
          <span>
            <hr className="w-20" />
          </span>
          <p className="text-black font-medium">Login with social accounts</p>
          <span>
            <hr className="w-20" />
          </span>
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogleSingIn}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>

        <button
          onClick={handleGithubSignIn}
          aria-label="Log in with GitHub"
          className="p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
        </button>
      </div>
      <p className="text-center mt-4">
        Do not have an account?
        <Link className="text-blue-600 font-bold ml-1 underline" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
