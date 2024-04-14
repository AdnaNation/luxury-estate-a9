import "animate.css";
// eslint-disable-next-line react/prop-types
const Estates = ({ estates }) => {
  console.log(estates);
  return (
    <div className="animate__animated animate__backInDown text-center mt-6">
      <h2 className=" text-xl md:text-3xl font-platypi underline ">
        Luxury Estates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {estates.map((estate) => (
          <div key={estate.id} className="card bg-base-100 shadow-xl">
            <figure className="">
              <img
                src={estate.image}
                alt="Shoes"
                className="rounded-xl w-full h-[220px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estates;
