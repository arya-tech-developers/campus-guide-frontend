import {TestimonialItem} from "./index";
import leftArrow from "../Assets/Images/left-arrow.png";
import rightArrow from "../Assets/Images/right-arrow.png";

function Testimonial(){
    return(
    <div className=" sm:rounded-2xl sm:mt-8 sm:py-10  sm:px-28 relative bg-green-600/5">
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
      </div>
        
    );
}


export default Testimonial;


