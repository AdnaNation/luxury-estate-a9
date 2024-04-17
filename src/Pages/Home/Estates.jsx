import "animate.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Estates = ({ estates }) => {
  return (
    <div className="animate__animated animate__backInDown text-center mt-6">
      <h2 className=" text-xl md:text-3xl font-platypi underline ">
        Luxury Estates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {estates.map((estate) => (
          <div key={estate.id} className=" mx-auto p-1 rounded-md shadow-xl">
            <div className="flex flex-col  mx-auto rounded">
              <img src={estate.image} className="h-80  rounded-lg" />
              <div className="md:h-60 -mt-16 space-y-6 rounded-2xl bg-blue-950 text-gray-50 mx-4">
                <div className="">
                  <a className="inline-block text-2xl font-semibold sm:text-3xl">
                    {estate.estate_title}
                  </a>
                  <p className="text-lg">Location: {estate.location}</p>
                </div>
                <div className="text-white text-md flex justify-between">
                  <p className="bg-purple-950 p-1 rounded-md">{estate.Area}</p>
                  <p className="bg-purple-950 p-1 rounded-md">
                    {" "}
                    {estate.price}
                  </p>
                  <p className="bg-purple-950 p-1 rounded-md">
                    For {estate.Status}
                  </p>
                </div>
                <Link
                  to={`/estate/${estate.id}`}
                  className="bg-purple-950 text-white btn border border-purple-800"
                >
                  View Property
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estates;
