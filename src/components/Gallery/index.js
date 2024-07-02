import React from "react";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-red-900">
            Top Categories to choose from
          </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block  border border-opacity-50 mb-5"
                src="https://images.meesho.com/images/marketing/1678691699680_300.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block  border border-opacity-50 mb-5"
                src="https://images.meesho.com/images/marketing/1678691712594_300.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block  border border-opacity-50 mb-5"
                src="https://media.istockphoto.com/id/1429456277/photo/online-shopping-with-credit-car-or-cash-money.webp?b=1&s=170667a&w=0&k=20&c=ag_iAVhF9G24GHgRIXdwt50NUn7xvmz3ORGTlFPHv7Q="
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block border border-opacity-50 mb-5 "
                src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?w=3601"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block border border-opacity-50 mb-5"
                src="https://images.meesho.com/images/marketing/1678691686252_400.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block border border-opacity-50 mb-5"
                src="https://www.westside.com/cdn/shop/files/L1_WS_Mobile_Hero3_850x1075_1_1024x1024.jpg?v=1689945888"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
