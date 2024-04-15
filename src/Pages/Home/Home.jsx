import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Estates from "./Estates";
import Team from "./Team";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div className="">
      <Banner></Banner>
      <Estates estates={estates}></Estates>
      <Team></Team>
    </div>
  );
};

export default Home;
