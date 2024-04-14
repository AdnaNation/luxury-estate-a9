const Banner = () => {
  return (
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
  );
};

export default Banner;
