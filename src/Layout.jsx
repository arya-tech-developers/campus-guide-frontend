import { Navbar, Footer } from "./Components";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function Layout(){
    const theme = useSelector(state=>state.theme)
    return(
        <div className={`${theme.current_theme} w-screen relative  sm:flex sm:flex-col`}>
        <Navbar />
         <Outlet />
        <Footer />
      </div>

    )
}

export default Layout;