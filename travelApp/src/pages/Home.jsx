import React from "react";
import PopularDestination from "../component/PopularDestination";
import Services from "../component/Services";
import Clients from "../component/Clients";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-bold text-white ml-5 ">
            Explore the World with Us
          </h1>
          <p className="text-1g nd:text-2xl text-white mb-8">
            Discover amazing places at exclusive deals
          </p>
          <Link
            to="/login"
            className="border text-white px-6 py-2 rounded-full text-1g md:text-x1 hover:bg-blue-500 transform transition duration-300 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
      <PopularDestination />
      <Services />
      <Clients />
    </>
  );
}
