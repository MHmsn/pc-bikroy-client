import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="mb-20 border-2 p-7 rounded-lg shadow-lg w-96">
        <h2 className="text-xl mb-10 text-center">Create new account</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label>
              <span className="label-text text-lg">Name</span>
            </label>
            <input
              className="mt-3 input input-bordered w-full max-w-xs"
              {...register("name", { required: "Name is required" })}
              type="text"
            />
          </div>
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
          <div className="form-control w-full max-w-xs">
            <label>
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              className="mt-3 input input-bordered w-full max-w-xs"
              type="email"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
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
                pattern: {
                  value: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/,
                  message:
                    "Your password must contain alphanumeric characters with at least 1 number and 1 special character",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
          <input
            type="submit"
            value="Register"
            className="btn btn-primary btn-outline my-5 w-full"
          />
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-primary underline text-sm">
            Log In
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

export default Register;
