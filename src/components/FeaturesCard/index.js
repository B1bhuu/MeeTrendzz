import React from "react";

const FeaturesCard = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="flex flex-col text-center w-full mb-30">
        <h1 className="text-xl text-purple-600 tracking-widest font-medium title-font mb-2">
          Become a Reseller and
        </h1>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-8 text-gray-900">
          Start your Online Business with Zero Investment
        </h1>
      </div>
      <div className="container px-5 py-5 mx-auto flex flex-wrap">
        <div className="lg:w-1/3 w-half mb-0 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-half w-half"
            src="https://octopos.com/wp-content/uploads/2023/01/Retailer-vs-Reseller.jpg"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-6 lg:w-1/2 lg:pl-6 lg:text-left text-center">
          <div className="flex flex-col mb-3 lg:items-start items-center">
            <div className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Growth for Every Supplier and 0% Commission Fee
              </h2>
              <p className="leading-relaxed text-base">
                From small to large and unbranded to branded, all suppliers have
                grown their businesses on Pentagon and Suppliers selling on
                Meesho keep 100% of their profit by not paying any commission.
              </p>
              <a className="mt-3 text-purple-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-0 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                No Order Cancellation Charges and Free Return Shipping
              </h2>
              <p className="leading-relaxed text-base">
                Cancel orders that you can’t fulfil for unforeseen reasons
                without worrying about penalties,Send out your orders
                stress-free with zero fees on return shipping for the first
                month.
              </p>
              <a className="mt-3 text-purple-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-0 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Dedicated Catalog Manager
              </h2>
              <p className="leading-relaxed text-base">
                Clear all your cataloging doubts like how to upload catalogs,
                correct quality check errors and more.
              </p>
              <a className="mt-3 text-purple-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;
