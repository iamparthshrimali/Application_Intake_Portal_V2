import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginAPI } from "../../services/loginService";
import { useNavigate } from "react-router-dom";
import Agent_Page from "../customer_for_approvement_page/AddCustomerForApprovement";
import ProtectedRoute from "../../routes/ProtectedRoute";

function Login() {
  // const [credentials, setCredentials] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const formSubmit = (data) => {
    // setCredentials(data);
    console.log(data);
    loginAPI(data).then((res) => {
      console.log("login data: ",res.data)
      if (res.data === "User Found") {
        sessionStorage.setItem("login", true);
        navigate("/agent");
      } else {
        alert("Invalid user name or password");
      }
      console.log(res.data);
    });
  };

  return (
    <div
      className="shadow-lg bg-gray-700 w-1/4 py-10 text-white h-max"
      style={{ padding: "30px 30px" }}
    >
      <form className="form flex flex-col" onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          id="Username"
          className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          {...register("username", { required: "Username is required" })}
        />
        <p style={{ color: "red" }}>{errors.username?.message}</p>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="Password"
          className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          {...register("password", {
            required: "Password is required",
          })}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Login
        </button>

        <div className="mt-3">
          <Link to={"/register"} className="nav-link ">
            {" "}
            Don't have an account ?{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
