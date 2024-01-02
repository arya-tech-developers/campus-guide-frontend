import img from "../Assets/Images/scholarship.png"

export default function TestimonialItem() {
  return (
    <div className="sm:min-w-[300px] sm:max-w-[384px] sm:h-[208px]  sm:text-base sm:rounded-2xl sm:p-8 bg-[#ffffff] font-Poppins sm:shadow-allEdges sm:tracking-wide">
      <p>"Campus Guide help me to improve my college academic performance. Thank You"</p>
      <div className="sm:mt-4 sm:flex sm:flex-row sm:items-center">
        <img 
        src={img}
        className="sm:w-[40px]" alt="TestimoinalItemProfilePhoto" />
        <div className="sm:pl-3 sm:flex sm:flex-col sm:justify-evenly sm:items-start ">
          <p
          className="sm:text-base sm:font-semibold ">Deepanshu Saini</p>
          <p
          className="sm:text-sm text-slate-500">Pursuing B.Tech</p>
        </div>
      </div>
    </div>
  )
}
