import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AllContext } from "../../contexts/AllContextProvider";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const {login} = useContext(AllContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    setError('');
    login(data.email, data.password)
    .then(res => {
      console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="mb-20 border-2 p-7 rounded-lg shadow-lg w-96">
        <h2 className="text-xl mb-10 text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label>
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              className="mt-3 input input-bordered w-full max-w-xs"
              type="email"
              {...register("email", { required: "Email Address is required" })}
            />

            {errors.email && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs mt-3">
            <label>
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              className="mt-3 input input-bordered w-full max-w-xs"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
            />

            {errors.password && (
              <p className="mt-2 text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-outline my-5 w-full"
          />
          <div className="my-2">
            {<p className=" text-red-500">{error}</p>}
          </div>
        </form>
        <p>
          First time in PC-Bikroy?{" "}
          <Link to="/register" className="text-primary underline text-sm">
            Create new account
          </Link>
        </p>
        <div className="divider my-5"> OR</div>
        <button className="btn btn-primary btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
