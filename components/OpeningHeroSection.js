import React from "react";

const OpeningHeroSection = () => {
  return (
    <>
      <div className="mx-4 md:mx-6 xl:mx-0">
        <div className="mx-auto container xl:max-w-[1284px] xl:px-20 2xl:px-0">
          <div className="flex pt-[80px] sm:pt-[114px] lg:pt-[224px] pb-8 sm:pb-12">
            <img
              src="/assets/images/arrow-backward.svg"
              className="pr-[8.67px]"
            />{" "}
            Back
          </div>
          <div className="pb-6 sm:pb-8 lg:pb-4">
            <h2 className="f-f-s font-normal text-3xl leading-[39px] sm:text-5xl sm:leading-[62.4px] lg:text-[64px] lg:leading-[76.8px] text-zinc-800">
              Senior Front-end Engineer
            </h2>
          </div>
          <div className="pb-8 sm:pb-12 lg:pb-8">
            <h2 className="f-f-s font-normal sm:text-base sm:leading-4">
              Full Time - Development - F-6, Islamabad
            </h2>
          </div>
          <div className="pb-8 sm:pb-12 lg:pb-8">
            <button className="bg-zinc-800 text-[#fff] flex py-[10px] px-6 rounded-3xl justify-center items-center">
              <span className="f-f-i font-normal text-[#fff] text-base leading-4">
                Apply
              </span>{" "}
              <img
                src="/assets/images/arrow-forward.svg"
                className="pl-[8.67px]"
              />
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default OpeningHeroSection;
