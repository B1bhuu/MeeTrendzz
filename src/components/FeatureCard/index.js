import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ cards = [1, 2, 3] }) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-black tracking-widest font-medium title-font mb-1"></h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            PRODUCT CATEGORIES
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          {cards.map((card) => {
            return (
              <Link
                to={`/categories/${card}`}
                class="p-4 md:w-1/3 cursor-pointer"
              >
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="inline-flex items-center text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-purple-800 rounded text-base mt-4 md:mt-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium capitalize">
                      {card || "Example card"}
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base"></p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FeatureCard;
