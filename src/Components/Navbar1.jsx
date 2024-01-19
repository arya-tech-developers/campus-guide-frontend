import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../Features/themeSlice";

function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const themeChangeHandler = () => {
    dispatch(changeTheme({ theme: theme.current_theme }));
  };

  return (
    <nav className="sm:w-full sm:h-15 sm:px-6 sm:py-1 font-Poppins  bg-slate-50 dark:bg-[#111] sm:flex sm:flex-row sm:justify-between sm:shadow-sm  select-none">
    {/* logoNavbar */}
      <Link
        to="/"
        className="sm:flex sm:flex-col sm:justify-evenly sm:items-center font-Poppins"
      >
        <h1 className="sm:mb-1 sm:mt-1 sm:text-3xl font-semibold text-black dark:text-white">
          Campus Guide
        </h1>
        <p className="text-[0.65rem]  text-black dark:text-white">
          Your ultimate companion for college life
        </p>
      </Link>
      {/* pageNavigationButtons */}
      <ul className="sm:flex sm:flex-row sm:justify-evenly sm:items-center sm:gap-8 sm:text-md font-Poppins text-black dark:text-white ">
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="about-us">About Us</NavLink>
        </li>
      </ul>
      <div className="sm:flex sm:flex-row sm:items-center sm:gap-4">
        <input type="text" placeholder="Search" className=" rounded-lg" />
        {/* searchButton */}
        <button className="sm:w-24 sm:h-10 sm:rounded-lg sm:font-medium text-white bg-green-600">
          Search
        </button>
        {/* loginButton */}
        <Link
          to={"/login"}
          className="sm:w-28 sm:h-10 sm:medium sm:rounded-lg text-green-600 sm:border-2 sm:border-green-600 sm:flex sm:justify-center sm:items-center"
        >
          <button className=" ">Login</button>
        </Link>
        {/*themeButton */}
        <img
          src={theme.logo_link}
          onClick={themeChangeHandler}
          alt="Theme Mode"
        />
      </div>
    </nav>
  );
}

export default Navbar;
