import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Estates from "./Estates";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Estates estates={estates}></Estates>
    </div>
  );
};

export default Home;
