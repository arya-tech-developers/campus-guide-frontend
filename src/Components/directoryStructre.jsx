import { Link } from "react-router-dom";
import folderIcon from "../Assets/Images/folder.png";

function DirectoryStructre(
  {directoryStructredata=[]
  }) {

  return (
    <div className="sm:w-full sm:max-w-screen-2xl  sm:mx-auto  sm:h-full sm:text-4xl bg-white dark:bg-black ">
      <div className="sm:w-fit sm:m-9">
        <h1 className="sm:mb-2">Question Papers</h1>
        <hr className="sm:w-56 sm:h-[3px] sm:mx-auto  sm:rounded-md sm:opacity-50 bg-green-600" />
      </div>
      {/* Container */}
      <div className="sm:h-auto mx-auto my-10 sm:w-3/4 border border-x-2 sm:flex sm:flex-col border-slate-300 rounded-xl shadow-md">
        {/* Breadcrum Container */}
        <div className="sm:h-10 border-b border-slate-300 rounded-t-xl text-black dark:text-white bg-slate-200  dark:bg-black text-sm sm:p-2">
          Question Papers /
        </div>
        <div className={`sm:h-full sm:w-full sm:p-12 sm:grid sm:grid-cols-${directoryStructredata.length&&directoryStructredata.length<4?directoryStructredata.length:4} sm:gap-y-10 sm:gap-x-36 place-content-center justify-center`}>
          {
            directoryStructredata.map(({ directoryName, path },index) => {
            return (
              
              <div key={index} className="hover:scale-105 duration-1000 ease-in-out cursor-pointer">
                <Link  to={path}>
                  <img className="sm:w-20 sm:mx-auto" src={folderIcon} alt="" />
                  <h4 className="text-sm text-center text-slate-500 font-Poppins ">
                    {directoryName}
                  </h4>
                </Link>
              </div>
              
            );
          })}
        </div>
        <div className="sm:h-8 border-t border-slate-300 rounded-b-xl bg-slate-200 dark:bg-black"></div>
      </div>
    </div>
  );
}

export default DirectoryStructre;
