import {Link} from "react-router-dom";


function MobileLandingPage() {
  return (
    <div className="w-screen h-screen p-2 flex flex-col  lg:hidden justify-center items-center">
      <p className="text-2xl my-20 font-Poppins  font-bold text-center">
        Website Under Contruction for Mobile/Tablet Devices
      </p>
      <p className="font-Poppins font-medium text-center">
        To contribute in Mobile Version of Campus Guide:</p>
        <Link
          className="w-36 h-9 my-5 flex justify-center items-center rounded-lg text-white font-Poppins font-semibold  py-1 bg-green-600 hover:bg-green-700"
          to={"https://github.com/arya-tech-developers/campus-guide-frontend"}
        >
          Click Here
        </Link>
      
    </div>
  );
}

export default MobileLandingPage;