import "animate.css";
import { CiMap } from "react-icons/ci";
import { MdPlace } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  console.log(estates);
  const estate = estates.find((estate) => estate.id == id);
  const {
    image,
    estate_title,
    description,
    facilities,
    location,
    Area,
    Status,
    price,
  } = estate;

  return (
    <div className="animate__animated animate__backInDown p-5 mx-auto   dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <div className="text-lg font-platypi font-bold max-w-36 -mb-16 relative">
          <p className="bg-yellow-400 mb-1 rounded-md">For {Status}</p>
          <p className="bg-yellow-400 rounded-lg">{price}</p>
        </div>
        <img src={image} alt="" className="" />

        <div className="text-gray-300 text-center mx-5 -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-blue-950">
          <div className="space-y-2">
            <a className="inline-block text-2xl font-semibold font-platypi sm:text-3xl underline">
              {estate_title}
            </a>
            <p>{description}</p>
            <hr />
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="md:text-left border-b">
              <h2 className="text-xl underline">Facilities:</h2>
              {facilities.map((facility) => (
                <li className=" list-none md:list-decimal" key={facility.idx}>
                  {facility}
                </li>
              ))}
            </div>
            <div>
              <p className="flex items-center">
                <MdPlace />
                {location}
              </p>
              <p className="flex items-center">
                <CiMap /> Area: {Area}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
