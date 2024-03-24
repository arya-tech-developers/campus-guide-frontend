import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./Components"
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector(state => state.theme)
  return (
    <div className={`${theme.current_theme} w-screen relative  sm:flex sm:flex-col`}>
      <Outlet />
    </div>

  );
}

export default App;
