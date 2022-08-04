import React from "react";

const UserExp = () => {
  return (
    <>
      <div className="mx-4 md:mx-6 xl:mx-0"> 
        <div className="mx-auto xl:max-w-[1284px] container bg-white py-10 md:py-16 lg:py-20 xl:px-20 2xl:px-0">
          <div className="flex items-center justify-start">
            <h2 className="text-zinc-800 text-[24px] leading-9 sm:text-3xl sm:leading-9 lg:text-[32px] lg:leading-8 tracking-[-0.03em] text-left font-normal f-f-s">
              The Challenge
            </h2>
          </div>
          <div className="flex pt-[10px] md:pt-4 lg:pt-7 pb-10 md:pb-8 lg:pb-16">
            <p className="lg:max-w-[747px] text-zinc-600 text-sm lg:text-lg text-left leading-6 sm:leading-[23px] md:leading-[25px] lg:leading-[27px] font-normal f-f-s">
              Our expert UX and backend team reviewed each conversion pathway
              and made detailed recommendations for code optimization, users
              experience enhancements and speed optimization.{" "}
            </p>
          </div>

          <div className="lg:max-w-[1274px] w-full bg-[#f5f5f5] flex sm:rounded-xl rounded-md mt-4 sm:mt-8 lg:mt-0 lg:mr-[6px] ">
            <img
              src="/assets/images/cs1/toyota-cross.svg"
              alt=""
              className="px-6 pt-4 pb-[10px] sm:px-12 sm:py-[27px] lg:py-[52px] lg:px-[96px] w-full"
            />
          </div>

        </div>
        <hr className=" w-[100%] h-[1px] text-zinc-200" />
      </div>
    </>
  );
};

export default UserExp;
