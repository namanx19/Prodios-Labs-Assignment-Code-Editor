/* eslint-disable no-unused-vars */
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-gray-200 py-4">
      <footer className="container mx-auto px-5 py-8 md:py-12 flex flex-col items-center space-y-6">
        <div className="text-center">
          <h1 className="font-courierprime text-2xl lg:text-3xl text-black">
            Code Editor
          </h1>
          <p className="text-black text-xs mt-4">
            Prodios Labs - Assignment - Code Editor Project
          </p>
        </div>
        <a
          href="https://github.com/namanx19/Prodios-Labs-Assignment-Code-Editor.git"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-300 px-4 py-2 rounded-full transition duration-300"
        >
          <FaGithub className="w-6 h-6" />
          <span className="text-black">Code Editor Codebase</span>
        </a>
        <div className="flex flex-col items-center space-y-2">
          <div className="bg-gray-300 p-2 rounded-full">
            <FaHeart className="w-4 h-4 text-pink-600" />
          </div>
          <p className="font-bold italic text-sm text-dark-light">
            Copyright © {currentYear}. Crafted with love.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
