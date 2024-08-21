import { Link, useNavigate } from "react-router-dom";
import useAuth from "./../hooks/useAuth";

const Login = () => {
  const { login, loginWithGoogle } = useAuth() || {};

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((res) => {
        const user = res.user;
        if (user) {
          // toast.success("login Successful");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          // toast.success("login Successful");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login</h1>
          <p className="py-6">Login with Email and Password</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="label-test-alt underline">Are you new ?</p>
                <Link to="/register" className="label-text-alt link link-hover">
                  Please Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="px-5 pb-5 max-w-sm">
            <button
              onClick={() => handleGoogleLogin()}
              className="btn btn-primary btn-block"
            >
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
