import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AllContext } from "../../contexts/AllContextProvider";
import useToken from "../../hooks/useToken";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);
  const {createUser, setUser,  setUserFromDB} = useContext(AllContext);
  const navigate = useNavigate();
  const[userEmail, setUserEmail] = useState('');
  const [token] = useToken(userEmail);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if(token){
    navigate('/');
  }
 
  const saveUser = info => {
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(info)
    })
    .then(res =>res.json())
    .then(data => {
      setUserFromDB(info);
      setUserEmail(info.email);
  })
    .catch(e => console.log(e))
  }

  const handleRegister = data => {
    createUser(data.email, data.password)
    .then(result => {
        const user = result.user;
        setUser(user);
        const userInfo = {
          name: data.name,
          email: data.email,
          role: data.userType,
          uid: user.uid,
          verified: false
        }
        saveUser(userInfo);
    })
    .catch(e => console.error(e))
  }

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
          <div className="form-control w-full max-w-xs">
            <label>
              <span className="label-text text-lg">User type</span>
            </label>
            <select
              className="mt-3 input input-bordered w-full max-w-xs"
              type="email"
              {...register("userType", { required: "This field is required" })}
            >
              <option>Buyer</option>
              <option>Seller</option>
            </select>
          </div>
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
      </div>
    </div>
  );
};

export default Register;
