import homeBgBanner from "../Assets/Images/hero_student_collage_IN_2x.png";
import TestimonialItem from "./TestimonialItem";
import { Link } from "react-router-dom";
import leftArrow from "../Assets/Images/left-arrow.png";
import rightArrow from "../Assets/Images/right-arrow.png";
import bannerImage from "../Assets/Images/Aysha-Swaona-Miss.webp"
import TestimonialsSection from "./testimonialsSection";
import Stats from "./Stats";
import FeatureSection from "./FeatureSection";


function Home() {
  return (
    <div className="max-w-screen-xl sm:mx-auto  ">
      <div className="sm:px-10 sm:w-full sm:flex sm:flex-row sm:justify-between sm:mt-7 ">
        <div className="sm:w-2/5">
          <img src={homeBgBanner} alt="Banner Image" />
        </div>
        <div className="sm:w-3/5 sm:pl-8 sm:mt-24 sm:font-Poppins px-10">
          <div className="sm:text-4xl sm:font-semibold sm:tracking-[0.0125em] text-slate-800">
            <p>
              For every College Student,
              <span className="block">every Classroom.</span>
            </p>
            <p className="sm:underline sm:decoration-green-200 sm:rounded-md sm:underline-offset-4">
              Real results.
            </p>
          </div>
          <div className="sm:w-full sm:mt-6 text-slate-500">
            <p>
              We are Student community where each of us is passonate to help and
              provide value in terms of knowledge to their peers.
            </p>
          </div>
          {/* Buttons Section */}
          <div className="sm:mt-7 sm:flex sm:flex-row sm:justify-between sm:space-x-3">
            <Link to="/question-papers" className="sm:w-1/3 sm:h-9 sm:rounded-md bg-green-600 sm:text-white sm:flex sm:justify-center sm:items-center hover:border-2 hover:outline-offset-2 hover:border-green-600 sm:font-medium sm:opacity-90">
              Question Papers
            </Link>
            <Link className="sm:w-1/3 sm:h-9 sm:flex sm:justify-center sm:items-center sm:rounded-md bg-green-600 sm:text-white sm:font-medium sm:opacity-90">
             Lecture Notes
            </Link>
            <Link className="sm:w-1/3 sm:h-9 sm:flex sm:justify-center sm:items-center sm:rounded-md bg-green-600 sm:text-white sm:font-medium sm:opacity-90">
              Video Lectures
            </Link>
          </div>
        </div>
      </div>
      {/* <div className=" sm:rounded-2xl sm:mt-8 sm:py-10  sm:px-28 relative bg-green-600/5">
        <h1
        className="text-5xl text-center  font-PatuaOne tracking-wide   ">What Students write About Us ?</h1>
        <hr  className="sm:w-1/2 sm:mx-auto sm:h-1 sm:mt-[3px] sm:rounded-md bg-green-600 shadow-sm shadow-green-600 opacity-40 "/>
       <img src={leftArrow}
       className="sm:h-12 absolute  left-5 top-1/2 opacity-50 cursor-pointer" /> 
       <section>
          <div 
        className="sm:grid sm:grid-cols-3 sm:gap-8 sm:my-8">
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
        <TestimonialItem/>
        </div>
        </section>
        
        <img src={rightArrow}
        className="sm:h-12 absolute right-5 top-1/2 opacity-50 cursor-pointer"/>
      </div> */}
      <FeatureSection/>
      <TestimonialsSection/>
      <Stats/>
    </div>
  );
}

export default Home;
