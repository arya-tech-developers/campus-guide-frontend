import { Link } from "react-router-dom";
import folderIcon from "../Assets/Images/folder.png";
import coa_pdf from "../Assets/Pdfs/COA.pdf";

function QuestionPaperBranchWise(){
    return(
        <div className="sm:w-full sm:max-w-screen-2xl sm:mx-auto sm:h-full sm:p-24 sm:grid gap-x-0 sm:grid-cols-3 gap-y-8">
        <Link className="" to="/question-papers/b.tech/cse" download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-sm sm:w-48 sm:text-wrap  sm:text-center font-Poppins">Computer Science and Engineering</p>
          </div>
        </Link>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-sm sm:w-48 sm:text-wrap  sm:text-center font-Poppins">Electrical Engineering</p>
          </div>
        </a>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-sm sm:w-60 sm:text-wrap  sm:text-center font-Poppins">Electronics and Communication Engineering</p>
          </div>
        </a>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-sm sm:w-48 sm:text-wrap  sm:text-center font-Poppins">Mechanical Engineering</p>
          </div>
        </a>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-sm sm:w-48 sm:text-wrap  sm:text-center font-Poppins">Civil Engineering</p>
          </div>
        </a>
      </div>
    );
}

export default QuestionPaperBranchWise;