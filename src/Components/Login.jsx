import { useState } from "react";
import appleLogo from "../Assets/Images/apple.png";
import googleLogo from "../Assets/Images/google.png";
import axios from "axios";

import { Link } from "react-router-dom";
import { errorMsg, succesMsg } from "../toasts/toast";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async(event)=>{
    event.preventDefault();
  try {
    const loginResponse = await axios.post(
      "http://localhost:5000/api/v1/users/login",
      {
        email,
        password
      }
      )
    if(!loginResponse){
      errorMsg("Something Went Wrong!");
    }
    else{
      succesMsg(loginResponse.response.data.message);
    }

  } catch (error) {
    errorMsg(error.message)
  }
  }
  return (
    <div className="sm:w-full sm:h-auto sm:py-16 sm:flex sm:justify-center sm:items-center bg-slate-100 font-Poppins text-sm ">
      <form 
      className="sm:h-auto sm:w-1/3 sm:p-7 sm:rounded-xl sm:flex sm:flex-col sm:justify-between  sm:border border-slate-200 sm:shadow-allEdges bg-white sm:gap-y-6 "
      onSubmit={loginHandler}>
        {/* Upper container */}
        <div className="sm:flex sm:flex-col sm:justify-between ">
          <p className="sm:mb-2">Email Address</p>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            required={true}
            className="sm:h-7 sm:px-2 sm:text-sm sm:tracking-wide sm:text-slate-400 sm:outline-none  sm:border border-slate-200 sm:shadow-sm sm:rounded-md"
          />
        </div>
        <div className="sm:flex sm:flex-col sm:justify-between ">
          <p className="sm:mb-2">Password</p>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            required={true}
            className="sm:h-7 sm:px-2 sm:text-sm sm:tracking-wide sm:text-slate-400 sm:outline-none sm:border border-slate-200 sm:shadow-sm sm:rounded-md"
          />
        </div>
        <div className="sm:flex sm:flex-row sm:justify-between">
          <div className="sm:flex sm:flex-row sm:gap-x-2">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p className="sm:font-medium opacity-60 sm:text-green-800">
            Forgot password?
          </p>
        </div>
        <div>
          <button 
          className="sm:w-full sm:h-8 sm:bg-green-600 opacity-90 rounded-md text-white font-medium"
          type="submit">
            Login
          </button>
          <p className=" sm:text-[14px] sm:mt-4 sm:text-slate-700  text-center">
            Not a registered user ?
            <Link to="/signup" className="sm:font-medium sm:text-green-600">
              {" "}
              Sign up{" "}
            </Link>{" "}
          </p>
        </div>

        {/* Lower Container */}
        <div className="sm:relative sm:mt-6 sm:flex sm:flex-row sm:justify-between sm:items-center ">
          <p className="sm:w-36 sm:z-50 sm:mx-auto sm:text-center  sm:font-medium bg-white">
            Or continue with
          </p>
          <hr className="sm:h-1 sm:w-full sm:absolute top-1/2 " />
        </div>
        <div className="sm:flex sm:flex-row sm:jusitfy-between sm:items-center sm:gap-x-4 ">
          <button className="sm:w-1/2  sm:bg-green-600 sm:rounded-md">
            <div className="sm:h-8 sm:font-medium sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-x-2  text-white ">
              <img className="sm:h-3" src={googleLogo} alt="" />
              <p>Google</p>
            </div>
          </button>
          <button className="sm:w-1/2 sm:h-8 sm:font-medium sm:rounded-md sm:bg-black text-white ">
            <div className=" sm:font-medium sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-x-2">
              <img className="sm:h-[16px]" src={appleLogo} alt="apple logo" />
              <p>Apple</p>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
