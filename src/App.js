import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./Components"
import { useSelector } from "react-redux";
import MobileLandingPage from "./Components/MobileLandingPage";

function App() {
  const theme = useSelector(state => state.theme)
  return (
      <div className={`${theme.current_theme} w-screen relative h-screen sm:flex sm:flex-col`}>
        <Navbar />
         <Outlet />
        <Footer />
      </div>
     
  );
}

export default App;
