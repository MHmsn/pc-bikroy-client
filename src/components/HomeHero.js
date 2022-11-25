import React from "react";

const HomeHero = () => {
  return (
    <div className="my-16">
      <div className="hero rounded-xl">
        <div className="hero-content bg-base-200 rounded-xl flex-col lg:flex-row">
          <img
            src="https://www.laptopsdirect.co.uk/files/images/ld/msi-gaming-mobile-landing-banner.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          alt=""/>
          <div>
            <h1 className="text-5xl font-bold">Buy used Computer Parts!</h1>
            <p className="py-6 text-xl px-5">
              Buy used computer parts and save money! Or sell your used computer part which you don't need anymore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
