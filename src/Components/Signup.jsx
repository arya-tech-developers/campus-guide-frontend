import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { succesMsg,errorMsg, toastProps } from "../toasts/toast.js";
import { useNavigate } from "react-router-dom";
import { isAlphaNumeric } from "../utils/functions.utils.js";
import "react-toastify/dist/ReactToastify.css";



function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();

  const signupHandler = async (event) => {
    event.preventDefault();
    // password must be alphanumeric & contain special characters
    // throw error if number present in name
      if(isAlphaNumeric(name))
      {errorMsg("Name must contain Alphabets only !");}
          
        // college not empty
      else if(!college)
        errorMsg("Invalid college!");  
                     
    // course not empty
      else if(!course){
        console.log(!course);
        errorMsg("Invlaid course!");
      }
    // branch not empty
      else if(!branch){
        errorMsg("Invalid branch!");
      }
    // semester not empty
      else if(!semester){
        errorMsg("Invalid semester!");
      }
    // send data to backend
      else{
        try {
          console.log(name,branch,course,college)
           axios.post(
            "http://localhost:5001/api/v1/users/registration",
            {
              name,
              email,
              password,
              college,
              course,
              branch,
              semester,
            }
          ).then((response)=>{
            toast.success(response.data.message,toastProps);
            console.log(response.data.statusCode)
            if(response.data.statusCode==201)
            setTimeout(() => {
               navigate("/signup-email-verification")
            }, 4000);
             
          })
          .catch((error)=>{
            toast.error(error.response.data.message,toastProps)
          })
          
          // succesful toast
            succesMsg();
            <redirect to="/login"/>
        } catch (error) {
          // error toast
          errorMsg()
        }
      }


    
  }

  return (
    <div className="sm:w-full sm:h-auto sm:py-20 sm:flex sm:justify-center sm:items-center bg-slate-100 font-Poppins text-sm ">
      {/* Same as */}
      <form onSubmit={signupHandler} className="sm:h-auto sm:w-4/6 sm:p-7 sm:rounded-xl sm:grid sm:grid-rows sm:grid-cols-2 sm:gap-x-6 sm:border border-slate-200 sm:shadow-allEdges bg-white sm:gap-y-5 ">
        <div className="sm:flex sm:flex-col sm:justify-between order-1 ">
          <p className="sm:mb-2">Name</p>
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={(event) => setName(event.target.value)}
            className="sm:h-7 sm:px-2 sm:text-sm sm:tracking-wide sm:text-slate-400 sm:outline-none  sm:border border-slate-200 sm:shadow-sm sm:rounded-md"
            required={true}
          />
        </div>
        <div className="sm:flex sm:flex-col sm:justify-between order-3">
          <p className="sm:mb-2">Email</p>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="sm:h-7 sm:px-2 sm:text-sm sm:tracking-wide sm:text-slate-400 sm:outline-none sm:border border-slate-200 sm:shadow-sm sm:rounded-md"
            required={true}
          />
        </div>
        <div className="sm:flex sm:flex-col sm:justify-between order-5 ">
          <p className="sm:mb-2">Password</p>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="sm:h-7 sm:px-2 sm:text-sm sm:tracking-wide sm:text-slate-400 sm:outline-none sm:border border-slate-200 sm:shadow-sm sm:rounded-md"
            required={true}
          />
        </div>
        <div className="sm:flex sm:flex-col sm:justify-between order-2">
          <p className="sm:mb-2">College</p>
          <select
            value={college}
            required={true}
            onChange={(event) => setCollege(event.target.value)}
            className="sm:h-7 sm:px-2 sm:text-sm sm:tracking-wide sm:text-slate-400 sm:outline-none sm:border border-slate-200 sm:shadow-sm sm:rounded-md sm:text-center"
          >
            <option value={false}> --- Select Your College ---</option>
            <option value={"srgc"}>Shri Ram Group of Colleges(SRGC)</option>
          </select>
        </div>
        <div className="sm:w-full sm:h-auto sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-4 order-4">
          <div className="sm:w-1/2  sm:flex sm:flex-col sm:justify-between  ">
            <p className="sm:mb-2 ">Course</p>
            <select
              value={course}
              onChange={(event) => setCourse(event.target.value)}
              required={true}
              className="sm:border sm:px-2 sm:h-7 sm:outline-none sm:text-slate-400 border-slate-200 sm:shadow-allEdges text-center active:border-0 active:outline-none sm:rounded-md"
            >
              <option value={false}>--- Select Course ---</option>
              <option value={"b.tech"}>B.Tech</option>
              <option value={"polytecnique"}>Polytecnique</option>
            </select>
          </div>
          <div className="sm:w-1/2 sm:flex sm:flex-col sm:justify-between ">
            <p className="sm:mb-2 ">Branch</p>  
            <select
              value={branch}
              required={true}
              onChange={(event) => setBranch(event.target.value)}
              className="sm:border  sm:px-2 sm:h-7 sm:outline-none text-center sm:text-slate-400 border-slate-200 sm:shadow-allEdges active:border-0 active:outline-none sm:rounded-md"
            >
              <option value={false}>--- Select Branch ---</option>
              <option value={"cse"}>Computer Science and Engineering</option>
              <option value={"ee"}>Electrical Engineering</option>
              <option value={"ece"}>Electronics and Communication Engineering</option>
              <option value={"ce"}>Civil Engineering</option>
              <option value={"me"}>Mechanical Engineering</option>
            </select>
          </div>
        </div>
        <div className="sm:w-full sm:h-auto sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-4 order-6">
          <div className="sm:w-1/2  sm:flex sm:flex-col sm:justify-between ">
            <p className="sm:mb-2 ">Semester</p>
            <select
              value={semester}
              required={true}
              onChange={(event) => setSemester(event.target.value)}
              className="sm:border sm:px-2 sm:h-7 sm:outline-none sm:text-slate-400 text-center border-slate-200 sm:shadow-allEdges active:border-0 active:outline-none sm:rounded-md"
            >
              <option value={false}>--- Select Semester ---</option>
              <option value={"1"}>1st sem</option>
              <option value={"2"}>2nd sem</option>
              <option value={"3"}>3rd sem</option>
              <option value={"4"}>4th sem</option>
              <option value={"5"}>5th sem</option>
              <option value={"6"}>6th sem</option>
              <option value={"7"}>7th sem</option>
              <option value={"8"}>8th sem</option>
            </select>
          </div>
          <div className="sm:w-1/2 sm:flex sm:flex-col sm:justify-between ">
            <p className="sm:mb-2 ">DOB</p>
            <input
              value={dob}
              onChange={(event) => setDob(event.target.value)}
              className="sm:h-7 sm:px-2 sm:border sm:text-slate-400 border-slate-200 sm:outline-none sm:shadow-allEdges active:border-0 active:outline-none sm:rounded-md"
              type="date"
            ></input>
          </div>
        </div>
        <div className="sm:col-span-full mx-auto text-center order-7">
          <div className="sm:text-xs sm:mb-8 sm:w-3/4 mx-auto tracking-wide">
            <p className="sm:mt-5 sm:text-slate-800">
              To learn more about how Campus-Guide collect, uses, shares and
              protect your personal data please read Campus-Guide's{" "}
              <Link
                to="/privacy-policy"
                className="sm:font-medium text-green-600"
              >
                {" "}
                Privacy Policy.
              </Link>
            </p>
            <p className="sm:mt-3 sm:text-slate-800 ">
              By clicking Sign up, You must be agree to Campus-Guide's{" "}
              <Link
                to="/terms-and-conditions"
                className="sm:font-medium text-green-600"
              >
                {" "}
                Terms and Condition of Use.
              </Link>
            </p>
          </div>
          <div className="sm:w-3/6 mx-auto">
            <button
              type="submit"
              className="w-full sm:h-9  sm:shadow-allEdges text-base  font-medium sm:bg-green-600  rounded-xl text-white"
          
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transitionBounce
      />
    </div>
  );
}

export default Signup;
