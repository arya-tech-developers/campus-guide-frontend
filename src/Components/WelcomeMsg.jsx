import bannerImage from "../Assets/Images/Aysha-Swaona-Miss.webp";

function WelcomeMsg(){
    return(
        <div className="sm:w-full  sm:h-[460px] sm:px-20 sm:flex sm:flex-row sm:justify-around sm:items-center sm:gap-x-16 sm:my-8 ">
            <img 
            src={bannerImage}
            className="sm:w-[450px] h- rounded-[30px]" alt="banner image" />
            <div className="font-Poppins">
                <h1 className=" sm:text-5xl sm:font-semibold">Welcome to <span className="text-green-600">Campus Guide</span>!</h1>
                <p 
                className="sm:my-6 sm:text-sm sm:tracking-[0.0125em] text-justify">Higher Education has progressively evolved over the years, and we see a shift from traditionl ways of teching and learning to more modern Digital form.In this era of digitalization in education, Students need academic resources in digital form more higher than ever though wide range of useful resources are allready avalible at web but these resources are very unorganised and distributed at various platforms.To cater this painpoint of college students 'Campus Guide' comes with to provide easy acces of organised and collective study resources for college students for improving their academics.</p>
                <button 
                className="text-green-600 text-md font-normal">Read More ...</button>
            </div>
        </div>
    );
}

export default WelcomeMsg;