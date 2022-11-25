import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
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
            
              <p className="mt-2 text-red-600" role="alert">
                error message
              </p>
            
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

            
              <p className="mt-2 text-red-600" role="alert">
                error message
              </p>
          </div>

          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-outline my-5 w-full"
          />
          <div className="my-2">
            <p className=" text-red-500">login error</p>
          </div>
        </form>
        <p>
          First time in PC-Bikroy?{' '}
          <Link to="/register" className="text-primary underline text-sm">
            Create new account
          </Link>
        </p>
        <div className="divider my-5"> OR</div>
        <button className="btn btn-primary btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
