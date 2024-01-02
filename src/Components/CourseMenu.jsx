import course_logo from "../Assets/Images/scholarship.png"

function CourseMenu(
    ){
    return (
        
        <div>
            <div className="sm:flex sm:flex-row sm:items-center sm:font-Poppins">
            <img src={course_logo} alt="Course_Logo" />
            <p
            className="sm:pl-6 text-2xl">{"B.Tech"}</p>
            </div>
            <hr className=" sm:w-11/12 sm:my-5 bg-slate-400" />
        </div>
    );
}

export default CourseMenu;