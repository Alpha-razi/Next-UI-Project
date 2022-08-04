import React from "react";

const BalanceUx = () => {
  return (
    <>
      <div className="mx-4 md:mx-6 xl:mx-0">
        <div className="mx-auto container xl:max-w-[1284px] py-8 sm:py-12 md:py-14 lg:py-0  xl:px-20 2xl:px-0 ">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-y-0 space-y-6 lg:space-x-4 ">
            <div className="flex lg:hidden flex-col justify-start text-2xl leading-9 md:text-2xl md:leading-6 tracking-[-3%] space-y-6 md:space-y-6 max-w-[492px]  ">
              <div className="heading">
                <h2 className="f-f-s text-2xl leading-9 lg:text-[32px] lg:leading-8 text-zinc-800 sm:leading-6 sm:text-2xl font-normal ">
                  Balancing UX with business needs
                </h2>
              </div>
              <div className="para max-w-[492px] ">
                <p className="f-f-s text-base leading-[24px] font-normal text-zinc-600">
                  For email capture and newsletter subscription we added sticky
                  email capture above the fold that would stay wherever the user
                  is throughout the website and page without obstructing user
                  experience.{" "}
                </p>
              </div>
            </div>
            <div className=" lg:mx-0 image flex mt-[14.77px] md:mt-8 lg:mt-0 justify-center items-center">
              <div className="lg:max-w-[624px] w-full bg-[#FFE8CB] rounded-xl flex ">
                <img
                  src="/assets/images/cs2/float.png"
                  className=" text-center pl-[14.02px] pr-[13.72px] pb-[11.2px] md:pb-[31.03px] lg:pb-10 lg:px-8 w-full"
                />
              </div>
            </div>
            <div className="flex lg:space-x-8 ">
              <div className="hidden lg:block border-l h-[236px] md:h-[268px] lg:h-[446px] " />
              <div className="hidden lg:flex flex-col justify-start lg:justify-center lg:items-center  space-y-6 md:space-y-6 max-w-[492px]  ">
                <div className="heading">
                  <h2 className="f-f-s text-2xl leading-9 lg:text-[32px] lg:leading-8 text-zinc-800 sm:leading-6 sm:text-2xl tracking-[-3%] font-normal ">
                    Balancing UX with business needs
                  </h2>
                </div>
                <div className="para max-w-[492px] ">
                  <p className="f-f-s text-base leading-[24px] font-normal text-zinc-600">
                    For email capture and newsletter subscription we added
                    sticky email capture above the fold that would stay wherever
                    the user is throughout the website and page without
                    obstructing user experience.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[100%] h-[1px] text-zinc-200" />
      </div>
    </>
  );
};

export default BalanceUx;
