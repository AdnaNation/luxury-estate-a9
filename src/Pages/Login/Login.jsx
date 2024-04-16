import "animate.css";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // reset error or success
    setLoginError("");
    setSuccess("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("You have logged in successfully");
        // navigate after login
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
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
