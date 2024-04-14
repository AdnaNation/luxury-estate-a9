const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full h-[200px] md:h-[350px]"
        >
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/hdKYcW2/Image-of-a-Modern-Glass-Mansion.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold text-gray-50">
                  Modern Glass Mansion
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="text-white">
              ❮
            </a>
            <a href="#slide2" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Xk2FVQ2/Image-of-a-Private-Island-Resort.png)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold text-gray-50">
                  Private Island
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-white">
              ❮
            </a>
            <a href="#slide3" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/kSHRTB9/Image-of-a-French-Chateau.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold text-gray-50">
                  French-Chateau
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-white">
              ❮
            </a>
            <a href="#slide4" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero"
            style={{
              backgroundImage: "url(https://i.ibb.co/ZxT9Nhv/penthouse.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold text-gray-50">
                  Penthouse
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-white">
              ❮
            </a>
            <a href="#slide1" className="text-white">
              ❯
            </a>
          </div>
        </div>
      </div>

      <section className=" bg-stone-700 text-gray-50  md:max-w-2xl mx-auto md:-mt-20 relative">
        <div className=" mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-2xl font-bold leading-none lg:text-4xl">50K+</p>
            <p className="text-sm sm:text-base">Clients</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-2xl font-bold leading-none lg:text-4xl">89K</p>
            <p className="text-sm sm:text-base">Followers on social media</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-2xl font-bold leading-none lg:text-4xl">3</p>
            <p className="text-sm sm:text-base">Published books</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-2xl font-bold leading-none lg:text-4xl">8</p>
            <p className="text-sm sm:text-base">Awards</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-2xl font-bold leading-none lg:text-4xl">22</p>
            <p className="text-sm sm:text-base">Years of experience</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-2xl font-bold leading-none lg:text-4xl">4.9</p>
            <p className="text-sm sm:text-base">Ratings</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
