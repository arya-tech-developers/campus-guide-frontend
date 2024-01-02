import folderIcon from "../Assets/Images/folder.png";
import coa_pdf from "../Assets/Pdfs/COA.pdf";
function QuestionPapersBtech() {
  return (
    <>
      <div className="sm:w-full sm:max-w-screen-2xl sm:mx-auto sm:h-full sm:p-24 sm:grid sm:grid-cols-4 gap-y-8">
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-md  sm:text-center font-Poppins">Semester - 1 </p>
          </div>
        </a>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-md  sm:text-center font-Poppins">Semester - 2</p>
          </div>
        </a>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-md  sm:text-center font-Poppins">Semester - 3</p>
          </div>
        </a>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-md  sm:text-center font-Poppins">Semester - 4</p>
          </div>
        </a>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-md  sm:text-center font-Poppins">Semester - 5</p>
          </div>
        </a>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-md  sm:text-center font-Poppins">Semester - 6</p>
          </div>
        </a>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-md  sm:text-center font-Poppins">Semester - 7</p>
          </div>
        </a>
        <a className="" href={coa_pdf} download="coa-pyqs.pdf">
          <div className="sm:flex sm:flex-col sm:justify-between sm:items-center">
            <img src={folderIcon} />
            <p className="sm:text-md  sm:text-center font-Poppins">Semester - 8</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default QuestionPapersBtech;
