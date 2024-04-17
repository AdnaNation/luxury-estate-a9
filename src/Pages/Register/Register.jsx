import "animate.css";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, logOut } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // reset error
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password must have at least a uppercase character."
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password must have at least a lowercase character."
      );
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch();

        setSuccess("You have registered successfully, Please Log in");
        // location.reload();
        logOut().then().catch();
        toast("You have successfully registered, please login");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="min-h-screen py-4 animate__animated animate__backInUp">
      <h2 className="text-3xl my-10 text-center font-platypi">
        Please Register
      </h2>
      <form
        onSubmit={handleRegister}
        className="bg-slate-400 p-8 rounded bg-opacity-60 md:w-3/4 lg:w-1/2 mx-auto"
      >
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            required
            name="name"
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            required
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
          />
        </div>
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
        {registerError && <p className="text-red-700">{registerError}</p>}

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      {success && <p className="text-green-600 text-center">{success}</p>}
      <p className="text-center mt-4">
        Already have an account?
        <Link className="text-blue-600 font-bold ml-1 underline" to="/login">
          Login
        </Link>
      </p>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
