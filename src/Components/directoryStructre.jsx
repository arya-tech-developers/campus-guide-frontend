import { Link } from "react-router-dom";
import folderIcon from "../Assets/Images/folder.png";
import { useState } from "react";

function DirectoryStructre() {
  const [directoryStructredata, setDirectoryStructreData] = useState([
    {
      directoryName: "B.Tech",
      path: "question-papers/b.tech",
    },
    {
      directoryName:"Polytechniue",
      path:"question-papers/b.tech",
    }
  ]);

  return (
    <div className="sm:w-full sm:max-w-screen-2xl  sm:mx-auto  sm:h-full sm:text-4xl ">
      <div className="sm:w-fit sm:m-9">
        <h1 className="sm:mb-2">Question Papers</h1>
        <hr className="sm:w-56 sm:h-[3px] sm:mx-auto  sm:rounded-md sm:opacity-50 bg-green-600" />
      </div>
      {/* Couse Container */}
      <div className="sm:h-1/2 mx-auto sm:w-3/4 border border-x-2 sm:flex sm:flex-col border-slate-300 rounded-xl shadow-md">
        {/* Breadcrum Container */}
        <div className="sm:h-10 border-b border-slate-300 rounded-t-xl bg-slate-200 text-sm sm:p-2">
          Question Papers /
        </div>
        <div className="sm:h-full sm:flex sm:flex-row sm:justify-center sm:gap-x-36 sm:items-center">
          {
          directoryStructredata.forEach(({ directoryName, path },index) => {
            console.log(directoryName,path,index);
            return (
              <div className="hover:scale-105 duration-1000 ease-in-out cursor-pointer">
                <Link to={path}>
                  <img className="sm:w-24" src={folderIcon} alt="" />
                  <h4 className="text-sm text-center text-slate-500 font-Poppins ">
                    {directoryName}
                  </h4>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="sm:h-8 border-t border-slate-300 rounded-b-xl bg-slate-200"></div>
      </div>
    </div>
  );
}

export default DirectoryStructre;
