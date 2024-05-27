import React from "react";
import Navbar from "../components/Navbar";

function Hero() {
  return (
    <>
      <img
        className="absolute inset-0 object-cover w-screen h-full"
        src="hero-bg.jpeg"
        alt="hero-background"
      />
      <div className="relative bg-black h-screen bg-opacity-75 backdrop-blur-sm">
        <Navbar />
        <div className="h-full flex items-center justify-center">
          <div className="mx-auto text-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
            <h1
              className="mb-4 text-center text-9xl font-light text-white leading-none animate-float-in"
              id="header"
            >
              CHANG'ACH MERCY
            </h1>
            <p className="text-white font-lighter animate-float-in">
            Senior Monitoring & Evaluation Specialist | Expert in Public Health Research & Community Health Programs | MPH Candidate at Kenyatta University
            </p>
            <div
              id="buttons"
              className="items-center justify-center mt-5 p-5 animate-float-in"
            >
              <button className="text-black bg-white rounded-full items-center w-48 text-center px-4 py-2 animate-bounce">
                See More
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
