import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../Hook/useToken";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signupError, setSignupError] = useState("");
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  const reload = () => {
    window.location.reload();
  };
  const navigate = useNavigate();
  if (token) {
    navigate("/");
    reload();
  }

  const onSubmit = (data) => {
    console.log(data);
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire(
          "Successfully SignUp Done !",
          "You clicked the button!",
          "success"
        );
        const profile = {
          displayName: data.name,
        };
        updateUser(profile).then(() => {
          saveUser(data.name, data.email);
        });
      })
      .catch((e) => {
        console.log(e);
        setSignupError(e.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctor-server-phi.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreateUserEmail(email);
      });
  };

  return (
    <div
      className="h-[500px] flex justify-center items-center"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="w-96 p-8">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600"> {errors.name.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "email must be required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600"> {errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600"> {errors.password.message}</p>
            )}
          </div>
          <div>
            {signupError && <p className="text-red-600">{signupError}</p>}
          </div>
          <input
            className="btn btn-primary w-full text-white mt-3"
            value="Register"
            type="submit"
          />
        </form>
        <p className="text-center mt-2">
          Already Have an account?{" "}
          <Link to={"/login"} className=" text-blue-600">
            <span className="font-bold">Please Login</span>
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
      <div></div>
    </div>
  );
};

export default Register;
