import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../Hook/useToken";

import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { loginUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  if (token) {
    navigate(from, { replace: true });
  }
  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        setLoginUserEmail(data.email);
        Swal.fire(
          "Successfully Login Done !",
          "You clicked the button!",
          "success"
        );
      })
      .catch((e) => {
        console.log(e.message);
        setLoginError(e.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div
      className="h-[500px] flex justify-center items-center"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="w-96 p-8">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be siz character",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.Password && (
              <p className="text-red-600">{errors.Password?.message}</p>
            )}
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
            <label className="label">
              {" "}
              <span className="label-text">Forget Password</span>
            </label>
          </div>
          <input
            className="btn btn-primary w-full text-white"
            value="Login"
            type="submit"
          />
        </form>
        <p className="text-center mt-2">
          New to Doctors Portal?{" "}
          <Link to={"/register"} className=" text-black">
            <span className="font-bold">Create new account</span>
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
