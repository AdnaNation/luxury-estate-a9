import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="container mx-auto font-poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
