import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="sm:w-screen sm:h-32   sm:p-6 bg-green-700 opacity-70">
      <div className="sm:flex sm:flex-row sm:justify-between">
      <div>
        <Link
          to="/"
          className="sm:flex sm:flex-col sm:justify-evenly sm:items-center font-Poppins "
        >
          <h1 className="sm:mb-1 sm:mt-1 sm:text-3xl font-semibold ">
            Campus Guide
          </h1>
          <p className="text-[0.65rem]">
            Your ultimate companion for college life
          </p>
        </Link>
      </div>
      <div className="sm:flex sm:flex-row sm:gap-x-6   "> 
            <h3>Home</h3>
            <h3>Privacy Policy</h3>
            <h3>About</h3>   
      </div></div>
      <div
      className="text-center">@Campus Guide - All Right Reseved.</div>
    </div>
  );
}

export default Footer;
