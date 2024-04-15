import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // create user
    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <div className="min-h-screen py-4">
      <h2 className="text-3xl my-10 text-center font-platypi">
        Please Register
      </h2>
      <form
        onSubmit={handleRegister}
        className="bg-slate-400 p-4 bg-opacity-60 md:w-3/4 lg:w-1/2 mx-auto"
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
          <input
            type="password"
            required
            name="password"
            placeholder="Password"
            className="input input-bordered"
          />
          <label className="label">
            <a className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">
        Already have an account?
        <Link className="text-blue-600 font-bold ml-1 underline" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
