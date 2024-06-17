/* eslint-disable no-unused-vars */
import React from "react";
import images from "../constants/images";

const Header = () => {
  return (
    <section className="sticky backdrop-blur bg-opacity-10 shadow-sm bg-white top-0 left-0 right-0 z-50">
      <header className="container mx-auto px-5 flex justify-center lg:py-3 py-2 items-center relative">
        <a href="/">
          <div className="flex items-center">
            <img
              src={images.Logo}
              alt="MyBookshelf"
              className="sm:w-10 sm:h-10 w-8 h-8 sm:mr-4 mr-2"
            />
            <h1 className="text-xs sm:text-lg md:text-xl lg:text-2xl font-bold text-black">
              Code Editor
            </h1>
          </div>
        </a>
      </header>
    </section>
  );
};

export default Header;
