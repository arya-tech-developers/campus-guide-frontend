import {Outlet} from "react-router-dom";
import {Navbar,Footer} from "./Components"
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector(state=>state.theme)
  return (
   <div className={`${theme.current_theme} sm:w-screen sm:relative  sm:h-screen sm:flex sm:flex-col`}>
   <Navbar/>
    <Outlet/>
   <Footer/> 
   </div>
  );
}

export default App;
