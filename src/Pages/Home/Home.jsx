import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Estates from "./Estates";
import Team from "./Team";

const Home = () => {
  const estates = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>Luxury Estate | Home</title>
      </Helmet>
      <Banner></Banner>
      <Estates estates={estates}></Estates>
      <Team></Team>
    </div>
  );
};

export default Home;
